import Link from "next/link";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Link href="/" passHref>
      <span className="text-lg font-bold text-primary">Creek</span>
    </Link>
  );
};
