import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import PublicLayout from "../layouts/Public";

const Home: NextLayoutPage = () => {
  return (
    <>
      <h1>Index</h1>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
