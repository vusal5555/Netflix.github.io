import React from "react";
import { useState } from "react";
import { NetflixAuth } from "../context/NetflixAuth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = NetflixAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center  h-screen text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="w-full h-full absolute object-cover"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="w-full h-full py-24 px-4 z-10">
          <form
            onSubmit={handleSignIn}
            className="max-w-[450px] h-[600px] bg-black/75 p-5 py-16 text-white mx-auto rounded-md"
          >
            {err ? <p className="px-4 py-2 bg-red-500">{err}</p> : null}
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-2 rounded-md text-black"
              />
            </div>
            <button className="py-2 px-4 w-full bg-red-500 text-center rounded-lg mt-4">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
