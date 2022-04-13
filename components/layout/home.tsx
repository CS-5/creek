import { FunctionComponent, ReactNode } from "react";
import { Logo } from "../logo";

/* 

Home header 

*/
interface HomeProps {
  className?: string;
}

export const Header: FunctionComponent<HomeProps> = (props) => {
  return (
    <header {...props}>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          <Logo />
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
        <p>Copyright © 2022 - All right reserved</p>
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
