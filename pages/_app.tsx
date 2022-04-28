import { Auth0Provider } from "@auth0/auth0-react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Layout as AppLayout } from "../components/layout/app";
import { Layout as HomeLayout } from "../components/layout/home";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  const Layout = useRouter().pathname.startsWith("/app")
    ? AppLayout
    : HomeLayout;

  const callbackDomain =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "http://localhost:3000";

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_FRONTEND_CLIENT_ID ?? ""}
      redirectUri={callbackDomain}
      audience={process.env.NEXT_PUBLIC_AUTH0_FRONTEND_AUDIENCE ?? ""}
      scope={process.env.NEXT_PUBLIC_AUTH0_FRONTEND_SCOPE ?? ""}
    >
      <div data-theme="night">
        <Head>
          <title>Creek</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Creek" key="title" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Auth0Provider>
  );
}
