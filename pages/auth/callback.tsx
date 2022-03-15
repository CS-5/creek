import type { NextPage } from "next";
import { useEffect } from "react";
import { useAuth } from "react-use-auth";

const Callback: NextPage = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/" });
  }, [handleAuthentication]);

  return (
    <h1>This is the auth callback page, you will be redirected momentarily.</h1>
  );
};

export default Callback;
