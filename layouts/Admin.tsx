import React from "react";

import AdminNavbar from "../components/navigation/Admin";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
};

export default Layout;
