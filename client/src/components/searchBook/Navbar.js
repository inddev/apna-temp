import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 relative h-20 bg-gray-50 items-center border shadow-lg">
      <div className="text-4xl font-bold">InDDev</div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex text-orange-400 gap-3 text-xl items-center font-semibold text-center">
          <li className="cursor-pointer">Astrology</li>
          <li className="min-w-max cursor-pointer">Yoga/wellness</li>
          <li className="min-w-max cursor-pointer">Information/Media</li>
          <li className="min-w-max cursor-pointer">e-Commerce</li>
          <li className="min-w-max cursor-pointer">Events/community</li>
        </ul>
      </div>
      <div className="w-10 overflow-hidden rounded-full bg-slate-400">
        <img src="/unknown.jpg" className="object-cover" alt="user" />
      </div>
    </nav>
  );
};

export default Navbar;
