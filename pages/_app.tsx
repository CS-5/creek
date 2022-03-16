import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import AuthenticatedNavbar from "../components/navigation/Authenticated";
import PublicNavbar from "../components/navigation/Public";
import { ReactNode } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  const { isAuthenticated } = useAuth0();

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN ?? ""}
      clientId={process.env.AUTH0_CLIENT_ID ?? ""}
      redirectUri={window.location.origin}
    >
      <div data-theme="forest">
        <Head>
          <title>Creek</title>
          <meta property="og:title" content="Creek" key="title" />
        </Head>
        {isAuthenticated ? <AuthenticatedNavbar /> : <PublicNavbar />}
        <Component {...pageProps} />
      </div>
    </Auth0Provider>
  );
}
