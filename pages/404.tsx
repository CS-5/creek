import { ErrorBox } from "../components/error";

export default function Custom404() {
  return <ErrorBox status={404} message={"Page not found"} />;
}
