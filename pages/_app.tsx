import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component data-theme="forest" {...pageProps} />;
}

export default MyApp;
