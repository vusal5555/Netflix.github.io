import React, { useState, useEffect } from "react";
import { NetflixAuth } from "../context/NetflixAuth";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = NetflixAuth();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieID = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShow);
    });
  }, [user?.email]);

  const deleteShow = async (id) => {
    try {
      const filteredMovies = movies.filter((movie) => movie?.id !== id);
      updateDoc(movieID, {
        savedShow: filteredMovies,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-white md:text-xl font-bold p-4">My Shows</h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            size={40}
            className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 z-50  hidden group-hover:block"
            onClick={() => slideLeft()}
          ></MdChevronLeft>
          <div
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            id={"slider"}
          >
            {movies.map((movie) => {
              return (
                <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-105 duration-200">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                    className="w-full h-full block"
                    alt={movie?.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                    <p className="whitespace-break-spaces text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {movie?.title}
                    </p>
                    <p>
                      <AiOutlineClose
                        onClick={() => deleteShow(movie?.id)}
                        className="absolute top-2 right-2"
                      ></AiOutlineClose>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <MdChevronRight
            size={40}
            className="bg-white  rounded-full absolute right-0 opacity-50 hover:opacity-100 z-50 hidden group-hover:block"
            onClick={() => slideRight()}
          ></MdChevronRight>
        </div>
      </div>
    </div>
  );
};

export default SavedShows;
