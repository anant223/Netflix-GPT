import React from 'react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 300);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 300);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[300px]">
            <img src={movie.poster} alt={movie.title} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2"
          onClick={scrollLeft}
        >
          <FiChevronLeft size={24} color="white" />
        </button>
      )}
      {scrollPosition < (movies.length - 1) * 300 && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2"
          onClick={scrollRight}
        >
          <FiChevronRight size={24} color="white" />
        </button>
      )}
    </div>
  );
};



export default Slider
