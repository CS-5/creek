import Layout from "../components/layout";
import Error from "../components/error";

export default function Custom404() {
  return <Error statusCode={404} errorText={"Page not found"} />;
}
