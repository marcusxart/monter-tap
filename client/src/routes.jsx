import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/pageWrapper";
import Landing from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import AuthWrapper from "./components/authWrapper";
import SignUp from "./pages/auth/signUp";
import ForgettenPassword from "./pages/auth/forgettenPassword";
import Dashboard from "./pages/dashboard";
import Privacy from "./pages/privacy";
import Withdraw from "./pages/withdraw/withdraw";
import Waitlist from "./pages/waitlist/waitlist";
import Bybit from "./pages/exchange/bybit";
import Task from "./pages/task/task";
import Verify from "./pages/exchange/verify";
import VerifyOtp from "./pages/auth/verifyOtp";
import ResetPassword from "./pages/auth/ResetPassord";
import ResendOtp from "./pages/auth/ResendOtp";
import Referals from "./pages/referals/referals";
import AboutUs from "./pages/aboutus";
import Faq from "./pages/faq";
import Blog from "./pages/blog";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <PageWrapper>
            <Landing />
          </PageWrapper>
        ),
      },
      {
        path: "auth",
        element: <AuthWrapper />,
        children: [
          { index: true, element: <SignIn /> },
          { path: "sign-in", element: <SignIn /> },
          { path: "sign-up", element: <SignUp /> },
          { path: "forgetten-password", element: <ForgettenPassword /> },
          { path: "verify-otp", element: <VerifyOtp /> },
          { path: "reset-password", element: <ResetPassword /> },
          { path: "resend-otp", element: <ResendOtp /> },
        ],
      },
      {
        element: <PageWrapper isLoggin />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "privacy", element: <Privacy /> },
          { path: "aboutus", element: <AboutUs /> },
          { path: "faq", element: <Faq /> },
          { path: "blog", element: <Blog /> },
        ],
      },
      {
        element: <PageWrapper isLoggin Withdraw noFooter />,
        children: [{ path: "withdraw", element: <Withdraw /> }],
      },
      {
        element: <PageWrapper Withdraw isLoggin noFooter />,
        children: [{ path: "waitlist", element: <Waitlist /> }],
      },
      {
        element: <PageWrapper Withdraw isLoggin noFooter />,
        children: [{ path: "task", element: <Task /> }],
      },
      {
        element: <PageWrapper Withdraw isLoggin noFooter />,
        children: [{ path: "referals", element: <Referals /> }],
      },
      {
        path: "exchange",
        element: <PageWrapper isLoggin noFooter />,
        children: [
          {
            index: true,
            element: <Bybit />,
          },
          { path: "bybit", element: <Bybit /> },
          { path: "verify", element: <Verify /> },
        ],
      },
    ],
  },
]);

export default routes;
