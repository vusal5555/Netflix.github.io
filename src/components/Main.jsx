import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const trunaceString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300  text-black py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 ml-4 text-white py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trunaceString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
