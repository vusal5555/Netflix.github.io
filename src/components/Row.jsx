import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h2 className="text-white md:text-xl font-bold p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 z-50  hidden group-hover:block"
          onClick={() => slideLeft()}
        ></MdChevronLeft>
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider" + rowId}
        >
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie}></Movie>;
          })}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white  rounded-full absolute right-0 opacity-50 hover:opacity-100 z-50 hidden group-hover:block"
          onClick={() => slideRight()}
        ></MdChevronRight>
      </div>
    </div>
  );
};

export default Row;
