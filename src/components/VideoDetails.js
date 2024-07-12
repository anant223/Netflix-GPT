import React from 'react'
import Btn from './Btn'

const VideoDetails = ({ desc, title }) => {
  return (
    <div className=" relative sm:pl-[60px] pl-[10px] sm:pr-[13.9rem] sm:mr-[28rem] mr-[8rem] sm:mt-0 mt-[12px]">
      <div className=" block text-justify relative">
        <h2 className=" font-bold sm:text-xl text-xs">{title}</h2>
        <p className="sm:mt-[20px] mt-[10px] sm:line-clamp-3 line-clamp-2 sm:text-lg text-[8.9px]">{desc}</p>
      </div>
      <div className="sm:mt-[20px] mt-[10px] flex sm:gap-5 gap-3 text-black">
        <div>
          <Btn
            name="▷ Play"
            className="btn sm:btn-md btn-xs"
          />
        </div>
        <div>
          <Btn
            name="ⓘ More Info"
            className=" sm:btn-outline btn-outline btn sm:btn-md btn-xs  border-white sm:text-white text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails
