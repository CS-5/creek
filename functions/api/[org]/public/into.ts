export const onRequest: PagesFunction = async (context) => {
  return new Response(JSON.stringify(context, null, 2));
};
