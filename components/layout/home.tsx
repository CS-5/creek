import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import { Logo } from "../logo";

/* 

Home header 

*/
interface HomeProps {
  className?: string;
}

export const Header: FunctionComponent<HomeProps> = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();

  return (
    <header {...props}>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          <Logo />
        </div>
        <div className="flex-none hidden py-auto px-2 mx-2 lg:flex">
          <div className="flex items-center">
            <button
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={
                isAuthenticated ? () => router.push("/app") : loginWithRedirect
              }
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
          </div>
        </div>
      </div>
    </header>
  );
};

/* 

Home footer 

*/
interface FooterProps {
  className?: string;
}

export const Footer: FunctionComponent<FooterProps> = (props) => {
  return (
    <footer {...props}>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>This is a footer.</p>
      </div>
    </footer>
  );
};

/* 

Home layout 

*/
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex h-16" />
      <main className="flex flex-grow p-2">{children}</main>
      <Footer className="flex h-16" />
    </div>
  );
};
