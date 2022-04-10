import { FunctionComponent } from "react";

interface Props {
  message?: string;
  status?: string | number;
}

export const ErrorBox: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="prose flex flex-col mx-auto justify-center items-center">
      <h1>An error occured</h1>
      <div className="divider">{props.status}</div>
      <p>{props.message}</p>
    </div>
  );
};
