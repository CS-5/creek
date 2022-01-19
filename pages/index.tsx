import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import MainLayout from "../layouts/MainLayout";

const Home: NextLayoutPage = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
