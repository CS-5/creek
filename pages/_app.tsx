import "../styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthConfig, useAuth } from "react-use-auth";
import { Auth0 } from "react-use-auth/auth0"; // TODO: This seems like it is/will be broken
import AuthenticatedNavbar from "../components/navigation/Authenticated";
import PublicNavbar from "../components/navigation/Public";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const router = useRouter();

  const callbackDomain =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "http://localhost:3000";
  const { isAuthenticated } = useAuth();

  return (
    <>
      <AuthConfig
        authProvider={Auth0}
        navigate={(url: string) => router.push(url)}
        params={{
          domain: "",
          clientID: "",
          redirectUri: `${callbackDomain}/auth/callback`,
        }}
      />

      <div data-theme="forest">
        <Head>
          <title>Creek</title>
          <meta property="og:title" content="Creek" key="title" />
        </Head>
        {/*isAuthenticated() ? <AuthenticatedNavbar /> : <PublicNavbar /> TODO: This is broken */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
