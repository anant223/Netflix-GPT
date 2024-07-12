import React from "react";
import {Video , MoviesContent} from "../components/Main";
import { generTV, TMDBMediaTVShows } from "../constant/TMDB";
import Gener from "../components/Gener";
import useScroll from "../hooks/useScroll";
import TMDB_API_OPTION from "../config/tmdbConfig";
import useApi from "../hooks/useApi";
import ShimmerComponent from "../shimmer/Shimmer";

const TVShowsPage = () => {
    const scroll = useScroll();
    const { state, isLoading } = useApi(
      TMDBMediaTVShows[0].api,
      TMDB_API_OPTION
    );
    const mediaMang = state?.results[0];
    const mediaId = mediaMang?.id;

  return isLoading ? (<ShimmerComponent/>) : (
    <div className="text-white bg-black">
      <div className=" relative text-white">
        <div>
          <Video 
           media_id={mediaId} 
           media_type={'tv'} 
          />
        </div>
        <div
          className={`flex items-center gap-5  pl-[60px] z-20 ${
            scroll.y > 0
              ? "fixed bg-black w-full p-4 z-30 top-[70px]"
              : "absolute top-20"
          }`}
        >
          <h1 className="font-bold text-3xl">TV Shows › </h1>
          <Gener gener={generTV} />
        </div>
      </div>
      <div className=" relative z-20  flex flex-col sm:-mt-[38px] sm:bottom-10">
        {TMDBMediaTVShows.map((item) => (
          <MoviesContent
            key={item.id}
            title={item.title}
            data={item.api}
            className={
              " overflow-hidden scroll-smooth items-center overflow-y-hidden flex gap-5 bg-black bg-opacity-40 overflow-x-hidden"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsPage;
