import { PagesFunction } from "../../types";

export const onRequest: PagesFunction = async (context) => {
  return new Response(JSON.stringify(context.data.user));
};
