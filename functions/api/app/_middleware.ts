import { parseJwt } from "@cfworker/jwt";
import { MgmtTokenResponse, PagesFunction } from "../../types";
import { Respond } from "../../util";

const errorHandler: PagesFunction = async ({ next }) => {
  try {
    return next();
  } catch (err: any) {
    console.error(err);
    return Respond(`${err.message}\n${err.stack}`, 500);
  }
};

// Move env vars to data object
// TODO: Determine if this makes any sense at all or if
// there are any security issues here.
const setup: PagesFunction<{
  AUTH0_DOMAIN: string;
  AUTH0_BACKEND_ID: string;
  AUTH0_BACKEND_SECRET: string;
  AUTH0_FRONTEND_AUDIENCE: string;
  CF_ACCOUNT_ID: string;
  CF_API_TOKEN: string;
}> = async ({ env, next, data }) => {
  let key: keyof typeof env;
  for (key in env)
    if (!env[key]) throw new Error("Worker has not been configured");

  data.auth0 = {
    domain: env.AUTH0_DOMAIN,
    backendId: env.AUTH0_BACKEND_ID,
    backendSecret: env.AUTH0_BACKEND_SECRET,
    frontendAudience: env.AUTH0_FRONTEND_AUDIENCE,
  };
  data.upstreamApis = {
    cfAccountId: env.CF_ACCOUNT_ID,
    cfApiToken: env.CF_API_TOKEN,
  };

  return next();
};

// Authenticate backend for all requests to the admin API
const authenticateBackend: PagesFunction = async ({ next, data }) => {
  // In theory, this should never be triggered
  if (!data.auth0) throw new Error("auth0 not setup");

  // If ManagementToken already exists, continue
  if (data.managementToken) return next();

  // Request ManagementToken from Auth0
  const tokenResponse: MgmtTokenResponse = await fetch(
    `https://${data.auth0.domain}/oauth/token`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_id: data.auth0.backendId,
        client_secret: data.auth0.backendSecret,
        audience: `https://${data.auth0.domain}/api/v2/`,
        grant_type: "client_credentials",
      }),
    }
  ).then((res) => res.json());

  data.managementToken = tokenResponse.access_token;

  return next();
};

// Verify client's JWT
const verifyJwt: PagesFunction = async ({ request, next, data }) => {
  if (!data.auth0) throw new Error("auth0 not setup");

  // If user is already set in this request chain (not sure if possible?), continue
  if (data.user) return next();

  // Get Authorization header
  const token = request.headers.get("Authorization") ?? "";

  // If no Authorization header, return
  if (!token) return Respond("No Authorization header", 401);

  // Remove prefix from token and parse
  const result = await parseJwt(
    token.replace("Bearer ", ""),
    `https://${data.auth0.domain}/`,
    data.auth0.frontendAudience
  );

  // If token is invalid, inform user
  if (!result.valid) return Respond(result.reason, 401);

  // Set data.jwt to JWT payload
  data.jwt = result.payload;

  return next();
};

const getUser: PagesFunction = async ({ next, data }) => {
  if (!data.auth0) throw new Error("auth0 not setup");

  // If no token was presented, return
  if (!data.jwt) return Respond("No valid token", 401);

  // If ManagementToken does not exist, error
  if (!data.managementToken) throw new Error("no Management API token");

  // If user already exists on request chain (not sure if possible?), continue
  if (data.user) return next();

  // Get user from Auth0
  data.user = await fetch(
    `https://${data.auth0.domain}/api/v2/users/${data.jwt.sub}`,
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${data.managementToken}`,
      },
    }
  ).then((res) => res.json());

  return next();
};

export const onRequest = [
  errorHandler,
  setup,
  authenticateBackend,
  verifyJwt,
  getUser,
];
