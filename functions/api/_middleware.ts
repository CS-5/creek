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

const authenticate: PagesFunction<{
  AUTH0_ISSUER: string;
  AUTH0_AUDIENCE: string;
}> = async ({ request, env, next }) => {
  const token = request.headers.get("Authorization");
  if (!token) {
    return new Response(JSON.stringify("Unauthorized: No token"), {
      status: 401,
    });
  }

  const result = await parseJwt(token, env.AUTH0_ISSUER, env.AUTH0_AUDIENCE);

  if (!result.valid) {
    return new Response(JSON.stringify(result.reason), {
      status: 401,
    });
  }

  return next();
};

export const onRequest = [errorHandler, authenticate];
