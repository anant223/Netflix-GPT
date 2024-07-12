import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BrowserPage from "./pages/BrowserPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./layout/Layout";
import MoviesPage from "./pages/MoviesPage";
import TVshowsPage from "./pages/TVshowsPage";
import SearchPage from "./pages/SearchPage";
import authService from "./appwrite/auth";

const checkAuth = async () => {
  const user = await authService.getCurrentUser();
  if (!user) {
    return redirect("/login");
  }
  return null; 
};

const checkGuest = async () => {
  const user = await authService.getCurrentUser();
  if (user) {
    return redirect("/browser");
  }
  return null;
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: checkGuest,
      },
      {
        path: "login",
        element: <LoginPage />,
        loader: checkGuest,
      },
      {
        path: "signup",
        element: <SignupPage />,
        loader: checkGuest,
      },
      {
        path: "/browser",
        element: <BrowserPage />,
        loader: checkAuth,
      },
      {
        path: "/browser/search",
        element: <SearchPage />,
      },
      {
        path: "/browser/tvshows",
        element: <TVshowsPage />,
      },
      {
        path: "/browser/movies",
        element: <MoviesPage />,
      },
    
    ],
  },
]);

export default Approuter;
