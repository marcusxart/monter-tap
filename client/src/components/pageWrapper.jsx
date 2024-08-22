import { Outlet } from "react-router-dom";
import Navbar from "./nav";
import Footer from "./footer";

const PageWrapper = ({ children, isLoggin, Withdraw, noFooter }) => {
  return (
    <>
      <Navbar isLoggin={isLoggin} />
      <main
        className={`${
          Withdraw ? "h-[100vh] overflow-y-hidden" : ""
        } pt-[90px] w-full min-h-[100dvh] overflow-x-hidden flex flex-col justify-between`}
      >
        {children ?? <Outlet />}

        {!noFooter && <Footer />}
      </main>
    </>
  );
};

export default PageWrapper;
