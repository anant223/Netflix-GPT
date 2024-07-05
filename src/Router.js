import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BrowserPage from "./pages/BrowserPage";
import SignupPage from "./pages/SignupPage";
import  Layout  from "./layout/Layout";
import authService from "./appwrite/auth";
import MoviesPage from "./pages/MoviesPage";
import TVshowsPage from "./pages/TVshowsPage";
import SearchPage from "./pages/SearchPage";
const Approuter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "browser",
        element: <BrowserPage />,
        loader: async () => {
          try {
            const user = await authService.getCurrentUser();
            if (!user) {
              throw new Error("No user found");

            }
            return user ;
          } catch (error) {
            return redirect("/login");
          }
        },
      },

      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "/browser/search",
        element: <SearchPage />,
      },
      {
        path: "/browser/tvshows",
        element: <TVshowsPage />,
      },
    ],
  },
]);

export default Approuter