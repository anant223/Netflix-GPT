import React, { useRef, useState } from 'react'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {login as authLogin} from "../slice/authSlice"
import { Link, useNavigate } from 'react-router-dom'
import { loginFields } from '../constant/constant'
import Input from './Input'
import Btn from './Btn'
import validate from "../utils/validate"
import { Container, Footer, Header } from './Main'

const Login = () => {
   const [err, setErr] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()
  const loginRef = useRef({email: null, password: null});
  const [isValid, setIsValid] = useState("")

  const handleLoginBtn = async() => {
    setErr("")
    try {
      const emailVal = loginRef.current.email.value;
      const passwordVal = loginRef.current.password.value;
      const validateResult = validate(emailVal, passwordVal);
      setIsValid(validateResult)
      const session = await authService.login(emailVal, passwordVal);
      if(session) {
        const userData = authService.getCurrentUser()
        if(userData)dispatch(authLogin(userData))
        navigate("/browser")
      }
    } catch (error) {
      setErr(error.message)
    }
  }

  return (
    <div className=" text-white relative">
      <Header />
      <Container>
        <div className=" relative max-w-[450px] max-h-[100vh] sm:mb-[50px] sm:px-[2%] mx-auto h-auto">
          <div className=" min-h-[540px] px-[68px] py-[48px] bg-black bg-opacity-80">
            <div className=" text-left overflow-hidden relative">
              <h1 className="sm:text-[2rem] font-bold mb-[28px] text-[1.5rem]">
                Sign In
              </h1>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              {loginFields.map((field) => (
                <div key={field.id} className=" my-[20px]">
                  <label
                    className="block text-gray-500 text-sm font-bold my-1"
                    htmlFor="email"
                  >
                    {field.labelText}
                  </label>
                  <Input
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white min-w-[12.5rem]"
                    type={field.type}
                    placeholder={field.placeholder}
                    ref={(el) => (loginRef.current[field.name] = el)}
                  />
                </div>
              ))}
              <div className="mt-[0.7rem]  text-red-500 text-[0.8125rem]">
                {isValid || err}
              </div>

              <div className="my-[30px]">
                <Btn
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  type="button"
                  name="Sign In"
                  handleBtn={handleLoginBtn}
                />
              </div>
              <p className="text-gray-500 mt-4">
                New to Netflix?{" "}
                <Link to="/signup" className="text-white hover:underline">
                  Sign up now
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
        {/* <div className="bg-black bg-opacity-85 p-8 rounded-lg shadow-lg w-full md:w-1/3 mx-0 md:mx-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-left">
          Sign In
        </h2>
  
      </div> */}
      </Container>
      <Footer />
    </div>
  );
}

export default Login
