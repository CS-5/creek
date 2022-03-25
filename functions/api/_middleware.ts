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
  AUTH0_DOMAIN: string;
  AUTH0_AUDIENCE: string;
}> = async ({ request, env, next, data }) => {
  console.log(env);
  let token = request.headers.get("Authorization");
  if (!token) {
    return new Response(JSON.stringify("Unauthorized: No token"), {
      status: 401,
    });
  }

  token = token.replace("Bearer ", "");

  const result = await parseJwt(
    token,
    `https://${env.AUTH0_DOMAIN}/`,
    env.AUTH0_AUDIENCE
  );

  if (!result.valid) {
    return new Response(JSON.stringify(result.reason), {
      status: 401,
    });
  }

  data.jwt = result;

  return next();
};

const getUser: PagesFunction<{
  AUTH0_DOMAIN: string;
  AUTH0_TOKEN: string;
}> = async ({ env, next, data }) => {
  const jwt: any = data.jwt;

  const res = await fetch(
    `https://${env.AUTH0_DOMAIN}/api/v2/users/${jwt.payload.sub}`,
    {
      headers: {
        Authorization: `Bearer ${env.AUTH0_TOKEN}`,
      },
    }
  );

  data.user = await res.json();

  console.log(data.user);

  return next();
};

export const onRequest = [errorHandler, authenticate, getUser];
