import React, { useEffect, useState } from "react";
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider, MuteButton } from "@vidstack/react";
import { nonvol, vol } from "../constant/constant";
import useApi from "../hooks/useApi";
import TMDB_API_OPTION from "../config/tmdbConfig";

const Video = ({ media_id, media_type, media_poster }) => {
  const [isTrailerKey, setIsTrailerKey] = useState();
  const { state } = useApi(
    `https://api.themoviedb.org/3/${media_type}/${media_id}/videos?language=en-US`,
    TMDB_API_OPTION
  );

  useEffect(() => {
    if (state?.results) {
      const teaser = state.results.find((el) => el.type === "Trailer");
      if (teaser) {
        setIsTrailerKey(teaser.key);
      }
    }
  }, [state]);

  return (
    <div className="relative sm:w-full sm:h-screen z-auto">
      <MediaPlayer
        src={`https://www.youtube.com/watch?v=${isTrailerKey}`}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        autoplay
        muted
        aspectRatio="16/9"
        className="relative top-0 left-0 w-full h-full"
      >
        <MediaProvider>
          <div className="bg-green-500 absolute z-20 w-full h-full 
         "></div>
          {/* Place CustomizeBtn outside the overlay div */}
        </MediaProvider>
        <CustomizeBtn />
      </MediaPlayer>
    </div>
  );
};

const CustomizeBtn = () => {
  const [isMute, setIsMute] = useState(false);

  const handleClick = () => {
    setIsMute(!isMute);
  };

  return (
    <div className="absolute right-[10px] bottom-[35px] sm:right-[60px] sm:bottom-[90px] z-40">
      <MuteButton
        className="text-white p-1 bg-transparent border border-white bg-opacity-75 rounded-full focus:outline-none"
        onClick={handleClick}
      >
        {isMute ? vol : nonvol}
      </MuteButton>
    </div>
  );
};

export default Video;
