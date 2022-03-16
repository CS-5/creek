import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";

const Index: NextPage = () => {
  const { user } = useAuth0();
  return (
    <>
      <h1>Index</h1>
      <p>User: {JSON.stringify(user)}</p>
    </>
  );
};

export default Index;
