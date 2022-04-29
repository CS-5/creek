import { PagesFunction } from "../../../../types";

// Handle all request types on the /api/app/stream/**/* path
export const onRequest: PagesFunction = async ({ request, data, params }) => {
  // Determine if multiple params were supplied and join if necessary
  const path =
    params.path instanceof Array ? params.path.join("/") : params.path;

  // If path was not specified, assume using the root ("stream") API
  const apiPath = params.path ? `/${path}` : "";

  return await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${data.upstreamApis?.cfAccountId}/stream${apiPath}`,
    {
      method: request.method,
      headers: {
        Authorization: `Bearer ${data.upstreamApis?.cfApiToken}`,
        ...request.headers,
      },
    }
  );
};
