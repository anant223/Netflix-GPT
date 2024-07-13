import React, { useRef, useState } from "react";
import { Backgroud, Btn, Container, Input} from "../Main";
import { useSelector } from "react-redux";
import { lang } from "../../constant/constant";
import { redirect, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/validate";


const HeroSection = () => {
  const langKey = useSelector((state) => state.preferences.value);
  const emailRef = useRef(null);
  const language = lang[langKey] || lang.en;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  
  const handleSignupBtn = () => {
    setMessage(""); 
    try {
      const email = emailRef.current.value;
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        setMessage("Email is not valid")
        throw redirect("/")
      }
      if(isValidEmail){ 
        navigate("/signup", { state: { emailVal: email } });

      }
      
    } catch (error) {
      setMessage(error.message);
      
    }
  };

  return (
    <Backgroud>
      <Container>
        <div className=" sm:py-[235px] py-[50px] px-12 text-center">
          <h1 className="sm:text-5xl text-2xl font-[900]">
            {language.heading}
          </h1>
          <p className="sm:text-[1.5rem] text-[1.125rem] font-[400] mt-[1rem]">
            {language.para}
          </p>
          <h3 className="text-xl mt-[1.5rem]">{language.para2}</h3>

          <div className="max-w-[36.625rem] mx-auto mt-[1.5rem] sm:px-[10px] px-[40px]">
            <form
              className={`grid sm:grid-cols-[70%_auto] grid-cols-1 gap-2`}
              onSubmit={(e) => e.preventDefault()}
            >
                <Input
                  ref={emailRef}
                  type="email"
                  className="border bg-black bg-opacity-40 rounded-sm h-[50px] border-[#ccc] p-2 sm:w-full w-full mx-auto"
                  placeholder={language.inputPlaceholder}
                />
              <div className=" mx-auto flex justify-center w-full">
                <Btn
                  handleBtn={ handleSignupBtn}
                  type="button"
                  className="bg-[#e50914] text-white rounded-sm h-[50px] sm:w-full w-[45.89%] mx-auto"
                  name={language.search}
                />
              </div>
              <div className="relative">
                <small>{message}</small>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Backgroud>
  );
};

export default HeroSection;
