import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import PublicLayout from "../layouts/Public";

const Dashboard: NextLayoutPage = () => {
  return (
    <>
      <h1>Live Dashboard</h1>
    </>
  );
};

Dashboard.getLayout = (page: ReactNode) => {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Dashboard;
