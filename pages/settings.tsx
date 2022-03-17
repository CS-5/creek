import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "../components/error";

const Settings: NextPage = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return (
      <Error
        statusCode={401}
        errorText="You must be logged in to view this page"
      />
    );
  }

  return (
    <>
      <h1>Settings</h1>
    </>
  );
};

export default Settings;
