import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isLoading } = useAuth0();

  return (
    <>
      <Header />
      <main>{isLoading ? "Loading..." : children}</main>
      <Footer />
    </>
  );
}
