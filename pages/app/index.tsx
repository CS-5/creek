import { useAuth0 } from "@auth0/auth0-react";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="prose">
      <h1>{isAuthenticated ? "Live Dashboard" : "Live"} </h1>
    </div>
  );
};

export default Index;
