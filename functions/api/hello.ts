export const onRequest: PagesFunction = async ({ request }) => {
  return new Response(JSON.stringify(request));
};
