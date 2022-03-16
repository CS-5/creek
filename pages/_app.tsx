import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  const callbackDomain =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "http://localhost:3000";

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ""}
      redirectUri={callbackDomain}
    >
      <div data-theme="forest">
        <Head>
          <title>Creek</title>
          <meta property="og:title" content="Creek" key="title" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Auth0Provider>
  );
}
