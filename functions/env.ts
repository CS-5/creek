export const onRequest: PagesFunction<{
  WORKER_AUTH0_ISSUER: string;
  WORKER_AUTH0_AUDIENCE: string;
  WORKER_AUTH0_TOKEN: string;
  WORKER_AUTH0_DOMAIN: string;
}> = async ({ env }) => {
  return new Response(JSON.stringify(env));
};
