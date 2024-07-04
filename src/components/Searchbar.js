import React, { useEffect, useRef, useState } from "react";
import { Btn, Container, Input } from "./Main";
import { IoSearchOutline } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
import useApi from "../hooks/useApi";
import TMDB_API_OPTION from "../config/tmdbConfig";
import { useDispatch } from "react-redux";
import { searching } from "../slice/searchSlice";
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const api = useApi(
    `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`,
    TMDB_API_OPTION
  );
  
  const handleChange = (e) =>{
    setInput(e.target.value)
    if(e.target.value.length > 0) {
      navigate("/browser/search")
    }
  }


    useEffect(() => {
      if (input) {
        dispatch(searching(api));
      }
    }, [input, dispatch, api]);


  const handleSearchClick = () => {
    setIsOpen(!isOpen)
  };
  const handleOutSide = () =>{
    if(isOpen){
        setIsOpen(false)
    }
  }


  return (
    <OutsideClickHandler onOutsideClick={handleOutSide}>
      <Container>
        <div>
          <div className=" relative">
            <Btn
              handleBtn={handleSearchClick}
              name={<IoSearchOutline />}
              className="text-[24px] absolute p-1"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value= {input}
              type="text"
              placeholder=" Title, People, Genres"
              className={`outline-none text-white  border pl-8 py-1 ${
                isOpen
                  ? "w-[210px] border-white bg-black"
                  : "bg-transparent w-0 border-transparent"
              } transition-all duration-300 ease-in`}
            />
          </div>
        </div>
      </Container>
    </OutsideClickHandler>
  );
};



export default Searchbar;
