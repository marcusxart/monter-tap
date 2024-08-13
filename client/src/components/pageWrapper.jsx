import { Outlet } from "react-router-dom";
import Navbar from "./nav";
import Footer from "./footer";

const PageWrapper = ({ children, isLoggin }) => {
  return (
    <>
      <Navbar isLoggin={isLoggin} />
      <main className="pt-[90px] w-full min-h-[100dvh] overflow-x-hidden flex flex-col justify-between">
        {children ?? <Outlet />}

        <Footer />
      </main>
    </>
  );
};

export default PageWrapper;
