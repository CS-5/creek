import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import AuthLayout from "../layouts/Auth";

const Auth: NextLayoutPage = () => {
  return (
    <>
      <h1>Auth</h1>
    </>
  );
};

Auth.getLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Auth;
