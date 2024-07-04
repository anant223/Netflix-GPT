import React, { useState } from "react";
import "@vidstack/react/player/styles/base.css";
import {
  MediaPlayer,
  MediaProvider,
  MuteButton,
  Poster,
} from "@vidstack/react";
import { nonvol, vol } from "../constant/constant";

const Video = () => {
  return (
    <div className="relative sm:w-full sm:h-screen pb-9/16">
      {" "}
      {/* Maintain aspect ratio */}
      <MediaPlayer
        src="https://youtu.be/WGESrn6UA6w?si=ST4QhD7mJm0a13Lf"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        // autoplay
        muted
        aspectRatio="16/9"
        className="absolute top-0 left-0 w-full h-full" // Ensure full width and height
      >
        <MediaProvider>
          <div className="bg-black w-full h-full bg-opacity-50"></div>{" "}
          {/* Adjusted to fit the video */}
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
    <div className="">
      <MuteButton
        className="vds-button text-white sm:bottom-[8rem] sm:right-[82px] right-[92px] bottom-12 p-1 absolute bg-transparent border border-white bg-opacity-75 rounded-full z-30"
        onClick={handleClick}
      >
        {isMute ? vol : nonvol}
      </MuteButton>
    </div>
  );
};

export default Video;
