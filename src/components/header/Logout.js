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
    const user = await authService.getCurrentUser(); 
    if (user) {
      await authService.logout(); 
      dispatch(logout()); 
      navigate("/"); 
    } else {
      console.log("User is not logged in.");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};


  return (
    <div className="text-white">
      {authStatus ? <Btn name="Log out" handleBtn={handleLogout} className="text-white" /> : null}
    </div>
  );
};

export default Logout;
