import React, { useEffect, useState } from "react"
import { store } from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Approuter from "./Router";
import authService from "./appwrite/auth";
import { login, logout } from "./slice/authSlice";

const AppFunction = () => {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoding(false))
  },[dispatch])
  return ( !loding ? <RouterProvider router={Approuter} /> : null
  )
}


function App() {
  
  return (
    <Provider store={store}>
      <AppFunction/>
    </Provider> 
  );
}

export default App;
