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
        ],
      },
      {
        element: <PageWrapper isLoggin />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "privacy", element: <Privacy /> },
        ],
      },
      {
        element: <PageWrapper isLoggin Withdraw />,
        children: [{ path: "withdraw", element: <Withdraw /> }],
      },
      {
        element: <PageWrapper Withdraw isLoggin />,
        children: [{ path: "waitlist", element: <Waitlist /> }],
      },
    ],
  },
]);

export default routes;
