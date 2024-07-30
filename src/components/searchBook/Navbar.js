import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 relative h-20 bg-gray-50 items-center border shadow-lg">
      <div className="text-4xl">LOGO</div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <input
          type="search"
          placeholder="Search for a book"
          className="border-2 p-2 mx-2 rounded-md"
        />
        <select name="" id="" className="border-2 p-2 mx-2 rounded-md">
          <option value="">All</option>
          <option value="">sort by name acs</option>
          <option value="">sort by name dsc</option>
          <option value="">publication Date</option>
          <option value="">price : low to high</option>
          <option value="">price : high to low</option>
        </select>
        <button
          className="
          bg-orange-500 hover:bg-orange-700 rounded-md text-white font-bold py-2 px-4
          "
        >
          Search
        </button>
      </div>
      <div>menu</div>
    </nav>
  );
};

export default Navbar;
