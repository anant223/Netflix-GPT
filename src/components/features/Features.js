import React from 'react'
import { fewObjects } from '../../constant/constant';

const Features = () => {
  return (
    <div>
      {fewObjects.map((obj, index) => (
        <section key={index} className="sm:py-[80px] py-[50px] border-t-8 border-gray-800 bg-black relative"
>
          <div className="max-w-[1550px] mx-auto px-[50px]">
            <div
              className={`flex sm:flex-1 flex-col sm:px-[4%] items-center ${
                index % 2 ? `sm:flex-row-reverse` : `sm:flex-row`
              } flex-col`}
            >
              <div className={`px-[20px] `}>
                <h2 className="sm:text-5xl text-[2rem] sm:text-start text-center font-bold sm:font-[900]">
                  {obj.heading}
                </h2>
                <p className="text-[1.125rem] font-normal sm:text-justify mt-4 text-center">
                  {obj.para}
                </p>
              </div>
              <div className="pl-[0.375rem]">
                <img src={obj.link} className="px-20" alt="img" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}



export default Features
