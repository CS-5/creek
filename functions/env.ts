export const onRequest: PagesFunction<{
  AUTH0_ISSUER: string;
  AUTH0_AUDIENCE: string;
  AUTH0_TOKEN: string;
  AUTH0_DOMAIN: string;
}> = async ({ env }) => {
  return new Response(JSON.stringify(env));
};
