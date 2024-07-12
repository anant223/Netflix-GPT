import React, { useEffect, useState } from "react";
import "@vidstack/react/player/styles/base.css";
import {
  MediaPlayer,
  MediaProvider,
  MuteButton,
  Poster,
} from "@vidstack/react";
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
    <div className="relative sm:w-full sm:h-screen">
      {
        <MediaPlayer
          src={`https://www.youtube.com/watch?v=${isTrailerKey}`}
          viewType="video"
          streamType="on-demand"
          logLevel="warn"
          crossOrigin
          playsInline
          // autoplay
          muted
          aspectRatio="16/9"
          className="absolute top-0 left-0 w-full h-full"
        >
          <MediaProvider>
            <div className="bg-black w-full h-full bg-opacity-50"></div>
          </MediaProvider>
          <CustomizeBtn />
        </MediaPlayer>
      }
    </div>
  );
};

const CustomizeBtn = () => {
  const [isMute, setIsMute] = useState(false);
  const handleClick = () => {
    setIsMute(!isMute);
  };
  return (
    <div className="">
      <MuteButton
        className=" text-white sm:bottom-0 sm:right-[82px] right-[42px] bottom-0 p-1 absolute bg-transparent border border-white bg-opacity-75 rounded-full z-30"
        onClick={handleClick}
      >
        {isMute ? vol : nonvol}
      </MuteButton>
    </div>
  );
};




export default Video;
