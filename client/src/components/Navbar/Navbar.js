import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [showPopup, setShowPopup] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleUserClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="flex justify-between p-3 h-20 bg-gray-50 items-center border shadow-lg relative">
      <div className="md:text-3xl text-lg font-bold">Apna Sanatan</div>
      <div
        onClick={() => setToggle(false)}
        className={`absolute lg:left-1/2 lg:top-1/2 lg:block ${
          toggle ? "block" : "hidden"
        } bg-orange-300 lg:bg-transparent lg:w-max w-full top-20 left-0 transition-opacity duration-200 lg:-translate-x-1/2 z-10 lg:-translate-y-1/2`}
      >
        <ul className="lg:flex lg:text-orange-400 text-white  gap-3 md:text-lg items-center font-semibold text-center">
          <Link to={"/"}>
            <li className="cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              Astrology
            </li>
          </Link>
          <Link to={"/yoga-wellness"}>
            <li className="min-w-max cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              Yoga & wellness
            </li>
          </Link>
          <Link to={"/information"}>
            <li className="min-w-max cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              Info & Media
            </li>
          </Link>
          <Link to={"/e-commerce"}>
            <li className="min-w-max cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              e-Commerce
            </li>
          </Link>
          <Link to={"/community"}>
            <li className="min-w-max cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              Events & community
            </li>
          </Link>
          <Link to={"/temples"}>
            <li className="min-w-max cursor-pointer border lg:border-none rounded-xl mt-1 py-1">
              Temples
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className={`lg:hidden block text-4xl`} onClick={handleToggle}>
          {!toggle ? <MdOutlineMenu /> : <RxCross2 />}
        </button>
        <img
          src="/unknown.jpg"
          className="object-cover md:w-12 w-8 h-8 md:h-12 relative overflow-hidden rounded-full bg-slate-400"
          alt="user"
          onClick={handleUserClick}
        />
        {showPopup && (
          <div className="absolute right-2 top-16 mt-2 w-48 bg-white shadow-lg rounded-lg">
            {isLoggedIn ? (
              <ul className="py-2">
                <Link to={"/profile"}>
                  <li
                    onClick={() => {
                      setShowPopup(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    Profile
                  </li>
                </Link>
                <Link to={"/login"}>
                  <li
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowPopup(false);
                      alert("Logged out"); // Replace with actual logout logic
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    Logout
                  </li>
                </Link>
              </ul>
            ) : (
              <ul className="py-2">
                <Link to="/login">
                  <li
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    Signup
                  </li>
                </Link>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
