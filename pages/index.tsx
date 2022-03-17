import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";

const Index: NextPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <h1>{isAuthenticated ? "Live Dashboard" : "Live"} </h1>
    </>
  );
};

export default Index;
