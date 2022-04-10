export const Respond = (body?: BodyInit | null | undefined, status = 200) => {
  return new Response(body, {
    status,
  });
};
