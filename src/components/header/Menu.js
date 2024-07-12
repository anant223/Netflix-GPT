import { useState } from 'react';
import {Btn, Logo, Logout} from '../Main';
import { Link, useLocation } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';
import { useMediaQuery } from "react-responsive";
import Searchbar from '../Searchbar';




const Menu = () => { 
  const [state, setState] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 640 });
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);
  const scroll = useScroll();

  const handleClick = (index) =>{
    setIsActive( isActive === index ? 0 : index)
  }
  const browseBtn = () =>{
    setState(!state)
  }
  

  const navItem = [
    {
      name: "Home",
      slug: "/browser",
      active: true
    },
    {
      name: "Movie",
      slug: "/browser/movies",
      active: false
    },
    {
      name: "TV Shows",
      slug: "/browser/tvshows",
      active: false
    },
  ];
  

  return (
    <div
      className={`text-white h-auto min-h-[70px] text-[.75vw]">
      <div className=" flex justify-between  items-center  text-[14px] sm:px-[60px] px-[10px] ${
        scroll.y > 0
          ? "bg-black fixed w-full"
          : "bg-gradient-to-b from-black to-transparent sticky"
      }`}
    >
      <div className="flex items-center h-[68px]">
        <div className="">
          <Logo className="sm:w-[8vw] mr-[25px]" />
        </div>
        <Btn
          handleBtn={browseBtn}
          className="sm:hidden p-[2px] flex text-white items-center gap-1"
          name="Browse "
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          }
        />
        <div>
          <div>
            <ul
              className={`list-none flex sm:gap-5 ${
                state || isDesktop
                  ? "flex-col sm:flex-row gap-4 p-4 sm:p-0 rounded bg-gray-900 sm:bg-transparent"
                  : "hidden"
              } relative sm:top-0 top-[80px] sm:right-0 right-[70px] sm:relative`}
            >
              {navItem.map((item, i) => (
                <li
                  key={item.slug}
                  className={`${isActive === i ? "font-bold" : "font-normal"}`}
                  onClick={() => handleClick(i)}
                >
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="  z-40 flex items-center justify-center sm:gap-5 relative gap-2">
        <div className="">
          <Searchbar />
        </div>
        {location.pathname === "/browser/search" ? (
          ""
        ) : (
          <>
            <div className="text-[2rem] p-2">
              <Btn
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                }
              />
            
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-[2.8vw] rounded-lg">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://occ-0-2164-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-content rounded-box  mt-3 w-40 p-2 shadow relative z-30"
              >
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Logout />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu
