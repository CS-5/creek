type auth0TokenResponse = {
  access_token: string;
  token_type: string;
};

export const getAuth0Token = async (
  domain: string,
  clientId: string,
  clientSecret: string
): Promise<string> => {
  const res: auth0TokenResponse = await fetch(`https://${domain}/oauth/token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      audience: `https://${domain}/api/v2/`,
      grant_type: "client_credentials",
    }),
  }).then((res) => res.json());

  return res.access_token;
};
