import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { NetflixAuth } from "../context/NetflixAuth";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = (props) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = NetflixAuth();
  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShow: arrayUnion({
          id: props.movie.id,
          title: props.movie.title,
          img: props.movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return props.movie?.backdrop_path ? (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block 
      cursor-pointer relative p-2 hover:scale-105 duration-200"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie?.backdrop_path}`}
        className="w-full h-full block"
        alt={props.movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-break-spaces text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {props.movie?.title}
        </p>

        <p className="absolute top-2 left-2 z-30 " onClick={saveShow}>
          {like ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
        </p>
      </div>
    </div>
  ) : null;
};

export default Movie;
