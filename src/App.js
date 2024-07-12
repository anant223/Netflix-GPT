import React, { useEffect, useState } from "react";
import { store } from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Approuter from "./Router";
import authService from "./appwrite/auth";
import { login, logout } from "./slice/authSlice";
import ShimmerComponent from "./shimmer/Shimmer";


const AppFunction = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  return !loading ?  (
    <>
      <RouterProvider router={Approuter} fallbackElement={<ShimmerComponent/>} />
    </>
  ) : <ShimmerComponent/>
};

function App() {
  return (
    <Provider store={store}>
      <AppFunction />
    </Provider>
  );
}

export default App;
