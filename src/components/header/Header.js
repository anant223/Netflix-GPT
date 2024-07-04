import React from 'react'
import {Link, useLocation} from "react-router-dom"
import {Container, Btn, LangSelection, Logo, Logout} from "../Main"
import { useSelector } from 'react-redux'
import Menu from './Menu'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();


  return (
    // <header
    //   className={`mx-auto sm:px-[60px] px-4 w-full relative z-30 py-[1.5rem]`}
    // >
    //   <Container>
    //     <div className={`flex justify-between items-center`}>
    //       <div className="">
    //         <Logo />
    //       </div>
    //       {authStatus ? <div className="flex justify-end gap-2">
    //         {location.pathname === "/" ? (
    //           <div>
    //             <LangSelection />
    //           </div>
    //         ) : null}
    //         <div>
    //           {(location.pathname === "/" || location.pathname === "/signup") ? (
    //             <Link to="/login">
    //               <Btn
    //                 name="Sign In"
    //                 className={
    //                   "bg-[#e50914] sm:p-[5px_25px] p-[7px_20px] rounded"
    //                 }
    //               />
    //             </Link>
    //           ) : null}
    //         </div>
    //       </div> : null}
    //     </div>
    //   </Container>
    // </header>
    <div className='absolute z-40 w-full'>
      <Menu />
    </div>
  );
}

export default Header
