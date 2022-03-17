import { FunctionComponent } from "react";

interface Props {
  className?: string;
  errorText?: string;
  statusCode?: number;
}

const Error: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="prose flex flex-col mx-auto justify-center items-center">
      <h1>An error occured</h1>
      <div className="divider">{props.statusCode}</div>
      <p>{props.errorText}</p>
    </div>
  );
};

export default Error;
