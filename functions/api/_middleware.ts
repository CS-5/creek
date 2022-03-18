import { parseJwt } from "@cfworker/jwt";

const errorHandler: PagesFunction = async ({ next }) => {
  try {
    return await next();
  } catch (err: any) {
    return new Response(JSON.stringify(`${err.message}\n${err.stack}`), {
      status: 500,
    });
  }
};

const authenticate: PagesFunction = async ({ request, env, next }) => {
  const token = request.headers.get("Authorization");
  if (!token) {
    return new Response(JSON.stringify("Unauthorized: No token"), {
      status: 401,
    });
  }

  const issuer = "https://example.com";
  const audience = "https://example.com";

  const result = await parseJwt(token, issuer, audience);

  if (!result.valid) {
    return new Response(JSON.stringify(result.reason), {
      status: 401,
    });
  }

  return next();
};

export const onRequest = [errorHandler, authenticate];
