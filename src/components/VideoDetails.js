import React from 'react'
import Btn from './Btn'

const VideoDetails = ({ desc, title }) => {
  return (
    <div className=" relative sm:pl-[60px] pl-[10px] lg:pr-[13.9rem] sm:text-[1.2vw] text-[1.8vw] pr-[12rem]">
      <div className=" block text-justify relative">
        <h2 className=" font-extrabold sm:text-3xl">{title}</h2>
        <p className="mt-[20px] line-clamp-3">{desc}</p>
      </div>
      <div className="mt-[30px] flex gap-5 text-black">
        <div>
          <Btn name="▷ Play" className="sm:btn  btn btn-sm" />
        </div>
        <div>
          <Btn name="ⓘ More Info" className="sm:btn sm:btn-outline sm:text-white text-white border border-white p-2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails
