import { useAuth0 } from "@auth0/auth0-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();

  return (
    <div className="prose flex flex-col mx-auto justify-center items-center">
      <h2 className="text-center">This application requires authentication</h2>
      <button
        className="btn btn-primary"
        onClick={
          isAuthenticated ? () => router.push("/app") : loginWithRedirect
        }
      >
        {isAuthenticated ? "Go to admin" : "Sign In"}
      </button>
    </div>
  );
};

export default Index;
