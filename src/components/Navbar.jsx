import React from "react";
import { Link } from "react-router-dom";
import { NetflixAuth } from "../context/NetflixAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = NetflixAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>

        {user ? (
          <div>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>

            <button
              onClick={() => handleLogOut()}
              className="px-4 py-2 text-white bg-red-400 rounded-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signin">
              <button className="text-white pr-4">Sign In</button>
            </Link>

            <Link to="/signup">
              <button className="px-4 py-2 text-white bg-red-400 rounded-md">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
