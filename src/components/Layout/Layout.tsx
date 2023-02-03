import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const route = useRouter();
  const isErrorPage = route.pathname === "/404";

  return (
    <>
      <Header />
      {children}
      {!isErrorPage && <Footer />}
    </>
  );
};

export default Layout;
