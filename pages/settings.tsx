import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "../components/error";
import { useEffect, useState } from "react";

const Settings: NextPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoading, isAuthenticated } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return (
      <Error
        statusCode={401}
        errorText="You must be logged in to view this page"
      />
    );
  }

  useEffect(() => {
    setLoading(true);

    fetch("api/default/public/info").then(async (data) => {
      const text = await data.text();
      setData(text);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="prose">
      <h1>Settings</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default Settings;
