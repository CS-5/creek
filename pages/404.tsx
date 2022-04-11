import { ErrorBox } from "../components/error";
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return <ErrorBox status={404} message={"Page not found"} />;
};

export default Custom404;
