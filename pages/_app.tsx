import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Auth0Provider>
  );
}
