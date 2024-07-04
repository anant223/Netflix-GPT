import React, { useState } from "react";
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider, MuteButton, Poster } from "@vidstack/react";
import { nonvol, vol } from "../constant/constant";

const Video = () => {
  return (
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
    >
      <MediaProvider>
        <div className="bg-black w-full absolute h-full bg-opacity-50">
        </div>
      </MediaProvider>
      <CustomizeBtn />
    </MediaPlayer>
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
        className="vds-button text-white sm:bottom-[16rem] sm:right-[120px] right-[60px] p-1 absolute bg-transparent border border-white bg-opacity-75 rounded-full z-30"
        onClick={handleClick}
      >
        {isMute ? vol : nonvol}
      </MuteButton>
    </div>
  );
};

export default Video;
