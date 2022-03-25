export const onRequest: PagesFunction = async ({ request, data }) => {
  return new Response(JSON.stringify(data.user));
};
