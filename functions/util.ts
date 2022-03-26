export const Respond = (body: any, status: number = 200) => {
  return new Response(JSON.stringify(body), {
    status,
  });
};
