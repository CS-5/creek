import Link from "next/link";
import { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  className?: string;
}

const Navbar: FunctionComponent<Props> = (props: Props) => {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();

  return (
    <header {...props}>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold text-primary">Creek</span>
        </div>
        <div className="flex-none hidden py-auto px-2 mx-2 lg:flex">
          <div className="flex items-center">
            <Link href="/">
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
            <Link href="/videos">
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
            {isAuthenticated && (
              <Link href="/settings">
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
            )}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user && user.picture ? (
                    <img src={user.picture} />
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
                {isAuthenticated && (
                  <li>
                    <label className="modal-button" htmlFor="account-info">
                      Account Info
                    </label>
                  </li>
                )}
                <li>
                  <button
                    onClick={
                      isAuthenticated
                        ? () => logout({ returnTo: window.location.origin })
                        : loginWithRedirect
                    }
                  >
                    {isAuthenticated ? "Logout" : "Login"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

export default Navbar;
