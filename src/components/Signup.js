import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import {loginFields as signupFields} from "../constant/constant"
import {Btn, Container, Input} from "./Main"
import validate from '../utils/validate'
import { login } from '../slice/authSlice'

const Signup = () => {
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState("");
  const registerRef = useRef({ email: null, password: null });
  const location = useLocation();
  const { emailVal } = location.state || {};



  const register = async () =>{
    setErr("")
    try {
      const email = registerRef.current.email.value;
      const password = registerRef.current.password.value;

      const validResult = validate(email, password);
      setIsValid(!validResult)
      const registerAccount = await authService.createAccount(email, password);

      if(registerAccount){
        const userData = await authService.getCurrentUser();
        if(userData) dispatch(login(userData));
        navigate("/browser");
      }     
    } catch (error) {
      setErr(error.message)
    }
  }




  return (
    <div className=" text-black">
      <Container>
        <div className="relative max-w-[450px] max-h-[100vh] sm:mb-[50px] sm:px-[2%] mx-auto h-auto">
          <div className="min-h-[540px] px-[48px]">
            <h1 className="text-[24px] font-bold my-10">
              Create a password to start your membership
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              {signupFields.map((field, index) => (
                <div key={index} className=" relative my-[20px]">
                  <label htmlFor="email" className="">
                    {field.labelText}
                  </label>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    ref={(el) => (registerRef.current[field.name] = el)}
                    required={field.isRequired}
                    className="w-full px-4 pt-6 pb-2 border  border-black rounded text-black focus:outline-none focus:ring-2 focus:ring-black min-w-[12.5rem]"
                  />
                </div>
              ))}
              <small className="text-red-500 my-4 ">{isValid || err}</small>
              <div className="mt-[24px] max-w-440px text-center">
                <Btn
                  className="w-full bg-red-600 hover:bg-red-700 font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[64px]"
                  type="button"
                  name="Sign Up"
                  handleBtn={register}
                />{" "}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup
