import { AppHeader } from "./appHeader";
import { AppFooter } from "./appFooter";
import { LandingHeader } from "./landingHeader";
import Error from "../error";
import { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppLayout: FunctionComponent<Props> = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (!isLoading && error) {
    children = <Error statusCode={401} errorText={error.message} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader className="flex h-16" />
      <main className="flex flex-grow p-2">
        {isLoading ? "Loading..." : children}
      </main>
      <AppFooter className="flex h-16" />
    </div>
  );
};

export const LandingLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader className="flex h-16" />
      <main className="flex flex-grow p-2">{children}</main>
      <AppFooter className="flex h-16" />
    </div>
  );
};
