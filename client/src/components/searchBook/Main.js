import React from "react";

const Main = () => {
  return (
    <div>
      <div className="flex justify-center shadow-md p-3 border-b">
        <input
          type="search"
          placeholder="Search for a book"
          className="border-2 p-2 mx-2 rounded-md w-96"
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
    </div>
  );
};

export default Main;
