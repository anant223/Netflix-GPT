import React, { useRef} from "react";
import useApi from "../hooks/useApi";
import TMDB_API_OPTION from "../config/tmdbConfig";
import { Btn, Container } from "./Main";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MoviesContent = ({ title, data, searchData, className }) => {
  const genre_id = useSelector((state) => state.preferences.id);
  const api = useApi(data, TMDB_API_OPTION);
  const results = api?.state?.results || [];
  const searchResult = searchData?.state?.results;
  const moviesData = searchResult?.length > 0 ? searchResult : results;
  const scrollRef = useRef(null);

  const crausalEvent = (direction) => {
    const { current } = scrollRef;

    if(current){
      const { scrollLeft, clientWidth } = current;
      if (direction === "l") {
        current.scrollLeft = scrollLeft - clientWidth;
      } else {
        current.scrollLeft = scrollLeft + clientWidth;
      }
    }
  };


  return (
    <Container>
      <div className="relative sm:pl-[60px] pl-[20px] py-[10px]">
        <div>
          <h2 className="text-[1.2rem] font-semibold whitespace-nowrap pb-[12px]">
            <Link to="#">{title}</Link>
          </h2>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2  flex justify-between w-full sm:px-[30px] px-[10px]">
          <Btn
            className={`text-4xl sm:6xl font-bold`}
            name={"‹"}
            handleBtn={() => crausalEvent("l")}
          />

          <Btn
            className={` text-4xl sm:6xl font-bold`}
            name={"›"}
            handleBtn={() => crausalEvent("r")}
          />
        </div>
        <div ref={scrollRef} className={`${className}`}>
          {moviesData
            .filter((ele) =>
              genre_id ? ele.genre_ids.includes(Number(genre_id)) : true
            )
            .map((movie) => (
              <div
                key={movie.id}
                className="sm:w-[180px] sm:min-w-[180px] w-[168px] min-w-[168px] m-[10px]"
              >
                {/* // `/movie/${movie.id}` */}
                <Link to="#">
                  <img
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                    alt={movie.title || "poster"}
                    className="border border-white rounded-sm"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MoviesContent;
