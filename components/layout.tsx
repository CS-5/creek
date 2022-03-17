import Header from "./header";
import Footer from "./footer";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isLoading } = useAuth0();

  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex h-16" />
      <main className="flex flex-grow">
        {isLoading ? "Loading..." : children}
      </main>
      <Footer className="flex h-16" />
    </div>
  );
}
