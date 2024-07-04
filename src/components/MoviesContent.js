import React from "react";
import useApi from "../hooks/useApi";
import TMDB_API_OPTION from "../config/tmdbConfig";
import { Container } from "./Main";
import { Link } from "react-router-dom";

const MoviesContent = ({ title, data, searchData, className }) => {
  const api = useApi(data, TMDB_API_OPTION);
  const results = api?.state?.results || [];
  const searchResult = searchData?.state?.results;
  const moviesData = searchResult?.length > 0 ? searchResult : results;

  return (
    <Container>
      <div className="sm:pl-[60px] px-[20px] py-[10px]">
        <div className="">
          <div className="mr-20px">
            <h2 className="text-[1.2rem] font-semibold whitespace-nowrap pb-[12px]">
              <Link>{title}</Link>
            </h2>
          </div>
          <div></div>
        </div>
        <div className={className}>
          {moviesData.map((movie) => (
            <div
              key={movie.id}
              className="sm:w-[150px] sm:min-w-[150px] w-[180px] min-w-[180px]"
            >
              <Link>
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}`}
                  alt="poster"
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
