import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex justify-between p-3 h-20 bg-gray-50 items-center border shadow-lg relative">
      <div className="text-3xl font-bold">Apna Sanathan</div>
      <div
        onClick={() => setToggle(false)}
        className={`absolute md:left-1/2 md:top-1/2 md:block ${
          toggle ? "block" : "hidden"
        } bg-orange-300 md:bg-transparent md:w-max w-full top-20 left-0 transition-opacity duration-200 md:-translate-x-1/2 z-10 md:-translate-y-1/2`}
      >
        <ul className="md:flex md:text-orange-400 text-white  gap-3 md:text-xl items-center font-semibold text-center">
          <Link to={"/"}>
            <li className="cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              Astrology
            </li>
          </Link>
          <Link to={"/yoga-wellness"}>
            <li className="min-w-max cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              Yoga & wellness
            </li>
          </Link>
          <Link to={"/information"}>
            <li className="min-w-max cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              Info & Media
            </li>
          </Link>
          <Link to={"/e-commerce"}>
            <li className="min-w-max cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              e-Commerce
            </li>
          </Link>
          <Link to={"/community"}>
            <li className="min-w-max cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              Events & community
            </li>
          </Link>
          <Link to={"/temples"}>
            <li className="min-w-max cursor-pointer border md:border-none rounded-xl mt-1 py-1">
              Temples
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className={`md:hidden block text-4xl`} onClick={handleToggle}>
          {!toggle ? <MdOutlineMenu /> : <RxCross2 />}
        </button>
        <img
          src="/unknown.jpg"
          className="object-cover md:w-12 w-8 h-8 md:h-12 overflow-hidden rounded-full bg-slate-400"
          alt="user"
        />
      </div>
    </nav>
  );
};

export default Navbar;
