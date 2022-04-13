import { NextPage } from "next";
import { ErrorBox } from "../components/error";

const Custom404: NextPage = () => {
  return <ErrorBox status={404} message={"Page not found"} />;
};

export default Custom404;
