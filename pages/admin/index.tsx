import type { NextPage, GetStaticProps } from "next";
import useSWR from "swr";
import { useAuth0 } from "@auth0/auth0-react";

const Settings: NextPage = () => {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const { data, error } = useSWR(
    isLoading || !isAuthenticated ? null : "/api/my/shows",
    async (url) => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://api/tv-shows",
        scope: "read:shows",
      });
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      return res.json();
    }
  );

  return (
    <>
      <h1>Settings</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      protected: true,
    },
  };
};

export default Settings;
