import React from "react";

import Navbar from "../components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
