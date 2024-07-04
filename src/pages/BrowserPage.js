import React from 'react'
import { Container, Video, MoviesContent} from "../components/Main"
import { TMDBMedia } from "../constant/TMDB";
import { Link } from 'react-router-dom';

const BrowserPage = () => {

  return (
    <div className=" bg-black h-auto relative">
      <Container>
        <Link>
          <div className=" fixed right-[60px] bottom-[50px] bg-green-700 p-[1rem] rounded-full z-30 ">
            <h2 className="text-white text-[1rem] flex justify-center items-center w-full">
              GPT Movie Exposer
            </h2>
          </div>
        </Link>
        <div className=" text-white">
          <div className="relative">
            <Video />
          </div>

          <div className=" relative z-20  flex flex-col sm:-mt-[150px] sm:bottom-10">
            {TMDBMedia.map((item) => (
              <MoviesContent
                key={item.id}
                title={item.title}
                data={item.api}
                className={
                  "overflow-scroll scroll-smooth items-center overflow-x-hidden overflow-y-hidden flex gap-5 bg-black bg-opacity-40"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BrowserPage
