export const onRequest: PagesFunction = async (context) => {
  console.log(context.request.headers);
  return new Response(JSON.stringify(context, null, 2));
};
