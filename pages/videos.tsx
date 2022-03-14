import type { NextLayoutPage } from "next";
import { ReactNode } from "react";
import PublicLayout from "../layouts/Public";

const Videos: NextLayoutPage = () => {
  return (
    <>
      <h1>Videos</h1>
    </>
  );
};

Videos.getLayout = (page: ReactNode) => {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Videos;
