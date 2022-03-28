import { FunctionComponent } from "react";

interface Props {
  className?: string;
}

export const AppFooter: FunctionComponent<Props> = (props: Props) => {
  return (
    <footer {...props}>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>This is a footer.</p>
      </div>
    </footer>
  );
};
