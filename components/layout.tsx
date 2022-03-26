import Header from "./header";
import Footer from "./footer";
import Error from "./error";
import { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (!isLoading && error) {
    children = <Error statusCode={401} errorText={error.message} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex h-16" />
      <main className="flex flex-grow p-2">
        {isLoading ? "Loading..." : children}
      </main>
      <Footer className="flex h-16" />
    </div>
  );
};

export default Layout;
