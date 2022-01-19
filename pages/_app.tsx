import "../styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import Head from "next/head";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <div data-theme="forest">
      <Head>
        <title>Creek</title>
        <meta property="og:title" content="Creek" key="title" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default MyApp;
