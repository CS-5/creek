import React from "react";

import PublicNavbar from "../components/navigation/Public";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
};

export default Layout;
