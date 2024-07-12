import React from 'react'
import {Video, MoviesContent} from '../components/Main'
import {generMovie, TMDBMediaMovies} from '../constant/TMDB'
import Gener from '../components/Gener'
import useScroll from '../hooks/useScroll'
import useApi from '../hooks/useApi'
import TMDB_API_OPTION from '../config/tmdbConfig'
import ShimmerComponent from "../shimmer/Shimmer";


const MoviesPage = () => {
  const scroll = useScroll()
  const {state, isLoading} = useApi(TMDBMediaMovies[0].api, TMDB_API_OPTION);
  const mediaMang = state?.results[0];
  const mediaId = mediaMang?.id;

  return isLoading ? (<ShimmerComponent/>) :
    (<div className="text-white bg-black">
      <div className=" relative text-white">
        <div className="relative">
          <Video
            media_id={mediaId}
            media_type={"movie"}
            media_poster={mediaMang?.poster_path}
          />
        </div>
        <div
          className={`flex items-center gap-5  pl-[60px] z-20 ${
            scroll.y > 0
              ? "fixed bg-black w-full p-4 z-30 top-[70px]"
              : "absolute top-20"
          }`}
        >
          <h1 className="font-bold text-3xl">Movies › </h1>
          <Gener gener={generMovie} />
        </div>
      </div>
      <div className=" relative z-20  flex flex-col sm:-mt-[38px] sm:bottom-10">
        {TMDBMediaMovies.map((item) => (
          <MoviesContent
            key={item.id}
            title={item.title}
            data={item.api}
            className={
              "overflow-hidden scroll-smooth items-center overflow-y-hidden flex gap-5 bg-black bg-opacity-40"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesPage
