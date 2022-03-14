import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import AdminLayout from "../../layouts/Admin";

const Settings: NextLayoutPage = () => {
  return (
    <>
      <h1>Settings</h1>
    </>
  );
};

Settings.getLayout = (page: ReactNode) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Settings;
