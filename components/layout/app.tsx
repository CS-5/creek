import Link from "next/link";
import { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Logo } from "../logo";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Footer as HomeFooter } from "./home";
import { ErrorBox } from "../error";

/* 

App header 

*/
interface HeaderProps {
  className?: string;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const router = useRouter();
  const { isLoading, isAuthenticated, logout, user } = useAuth0();

  if (!isLoading && !isAuthenticated) router.push("/");

  return (
    <header {...props}>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          <Logo />
        </div>
        <div className="flex-none hidden py-auto px-2 mx-2 lg:flex">
          <div className="flex items-center">
            <Link href="/app" passHref>
              <div className="btn btn-ghost btn-sm rounded-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Live
              </div>
            </Link>
            <Link href="/app/videos" passHref>
              <div className="btn btn-ghost btn-sm rounded-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Videos
              </div>
            </Link>
            <Link href="/app/settings" passHref>
              <a className="btn btn-ghost btn-sm rounded-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Settings
              </a>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user && user.picture ? (
                    <img src={user.picture} alt="User avatar" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-36 bg-neutral "
              >
                <li>
                  <label className="modal-button" htmlFor="account-info">
                    Account Info
                  </label>
                </li>
                <li>
                  <label className="modal-button" htmlFor="account-link">
                    Link Accounts
                  </label>
                </li>
                <li>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="account-link" className="modal-toggle" />
      <label htmlFor="account-link" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Link Account</h3>
          <button className="btn">Google</button>
          <button className="btn">GitHub</button>
        </label>
      </label>

      <input type="checkbox" id="account-info" className="modal-toggle" />
      <label htmlFor="account-info" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">User Account Info</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </label>
      </label>
    </header>
  );
};

/* 

App footer 

*/
// Reuse home footer for application (for now)
export const Footer = HomeFooter;

/* 

App layout 

*/
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (!isLoading && error) {
    children = <ErrorBox status={401} message={error.message} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex h-16" />
      <main className="flex flex-grow p-2">
        {isLoading ? "Loading..." : children}
      </main>
      <Footer className="flex h-16" />
    </div>
  );
};
