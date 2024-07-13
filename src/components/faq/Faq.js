import React, { useState } from 'react'
import { QNAContent } from '../../constant/constant';
import { Footer } from '../Main';

const Faq = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(null)

  const handleToggle = (index) =>{
    setIsActiveIndex(isActiveIndex === index ? null : index)
  }
  
  return (
    <div>
    <div className="bg-black sm:py-[4.5rem] py-[3.5rem]  border-t-8 border-gray-700 ">
      <div className=" max-w-[1550px] mx-auto px-[150px]">
        <h2 className="sm:text-5xl text-3xl sm:font-[900] font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-[3.5rem]">
          {QNAContent.map((qna, index) => (
            <div key={index} className="bg-[#2d2d2d] mb-2 ">
              <div
                className="p-[20px] sm:text-3xl text-[1.4rem] duration-300 relative cursor-pointer border-b-2 border-black hover:bg-[red]"
                onClick={() => handleToggle(index)}
              >
                <h1>{qna.Question}</h1>
                <span
                  className={`absolute top-[25px]  right-[40px] ${
                    isActiveIndex === index
                      ? `rotate-[45deg] duration-300`
                      : `rotate-0 duration-300`
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={`text-[18px] ${
                  isActiveIndex === index ? `p-[20px] scale-100` : `scale-0 h-0`
                }`}
              >
                <p>{qna.Ans}</p>
                <p>{qna.Ans2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
}

export default Faq
