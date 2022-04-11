import { FunctionComponent } from "react";
import Link from "next/link";

export const Logo: FunctionComponent = () => {
  return (
    <Link href="/" passHref>
      <span className="text-lg font-bold text-primary">Creek</span>
    </Link>
  );
};
