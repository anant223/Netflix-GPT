import React, { useState } from "react";
import { Btn } from "../Main";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log("error", error)
    }
  };

  return (
    <div className="text-black">
      {authStatus ? <Btn name="logout" handleBtn={handleLogout} className="text-black" /> : null}
    </div>
  );
};

export default Logout;
