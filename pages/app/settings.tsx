import { useAuth0 } from "@auth0/auth0-react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ErrorBox } from "../../components/error";

const Settings: NextPage = () => {
  const [data, setData] = useState<any>();
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // TODO: Figure out how to properly handle errors
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
  }, [getAccessTokenSilently, isAuthenticated]);

  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBox
        status={401}
        message="You must be logged in to view this page"
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
