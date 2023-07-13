import React from "react";
import { useState } from "react";
import { NetflixAuth } from "../context/NetflixAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { createUser } = NetflixAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="w-full m-auto flex flex-col justify-center items-center h-screen text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="w-full h-full absolute object-cover"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="w-full h-full z-10 px-4 py-24">
          <form
            onSubmit={handleSignIn}
            className="max-w-[450px] h-[600px] m-auto bg-black/75 p-5 py-16 rounded-md text-white"
          >
            <div className="flex flex-col mb-4">
              <label className="text-lg font-bold mb-2">Email</label>
              <input
                className="py-2 px-2  rounded-md"
                type="email"
                onChange={(e) => setEmial(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-bold mb-2">Password</label>
              <input
                className="py-2 px-2  rounded-md"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="py-2 px-4 w-full bg-red-500 text-center rounded-lg mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
