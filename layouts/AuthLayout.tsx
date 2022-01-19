import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
