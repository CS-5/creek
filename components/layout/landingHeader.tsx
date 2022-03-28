import Link from "next/link";
import { FunctionComponent } from "react";
import Logo from "../logo";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  className?: string;
}

export const LandingHeader: FunctionComponent<Props> = (props: Props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <header {...props}>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          <Logo />
        </div>
        <div className="flex-none hidden py-auto px-2 mx-2 lg:flex">
          <div className="flex items-center">
            <Link href="/app" passHref>
              <button
                className="btn btn-ghost btn-sm rounded-btn"
                onClick={isAuthenticated ? undefined : loginWithRedirect}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                {isAuthenticated ? "Admin" : "Login"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
