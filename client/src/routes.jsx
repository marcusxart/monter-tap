import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/pageWrapper";
import Landing from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import AuthWrapper from "./components/authWrapper";
import SignUp from "./pages/auth/signUp";
import ForgettenPassword from "./pages/auth/forgettenPassword";
import Dashboard from "./pages/dashboard";
import Privacy from "./pages/privacy";

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
    ],
  },
]);

export default routes;
