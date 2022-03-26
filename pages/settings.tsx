import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "../components/error";
import { useEffect, useState } from "react";

const Settings: NextPage = () => {
  const [data, setData] = useState<any>();
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        fetch("/api/admin/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then(setData);
      });
    }
  }, []);

  if (!isAuthenticated && !isLoading) {
    return (
      <Error
        statusCode={401}
        errorText="You must be logged in to view this page"
      />
    );
  }

  return (
    <div className="prose">
      <h1>Settings</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Settings;
