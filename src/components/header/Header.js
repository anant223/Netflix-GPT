import React from 'react'
import {Link, useLocation} from "react-router-dom"
import {Container, Btn, LangSelection, Logo} from "../Main"
import Menu from "./Menu"

const Header = () => {
  const location = useLocation();
  const isRouterBrowse = location.pathname.startsWith("/browser");


  return (
    <>
     {!isRouterBrowse ? <header
        className={`mx-auto sm:px-[60px] px-4 w-full absolute py-[1.5rem] z-40`}
      >
        <Container>
          <div className={`flex justify-between items-center`}>
            <div className="">
              <Logo />
            </div>
              <div className="flex justify-end gap-2">
                {location.pathname === "/" ? (
                  <div>
                    <LangSelection />
                  </div>
                ) : null}
                <div>
                    <Link to="/login">
                      <Btn
                        name="Sign In"
                        className={
                          "bg-[#e50914] sm:p-[5px_25px] p-[7px_20px] rounded"
                        }
                      />
                    </Link>
                </div>
              </div>
          </div>
        </Container>
      </header>
      :
      <div className="absolute z-40 w-full">
        <Menu />
      </div>
      }
    </>
  );
}

export default Header
