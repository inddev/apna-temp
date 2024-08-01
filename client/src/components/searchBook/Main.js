import { scriptureData } from "../../utils/scripturesData";
import { useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = scriptureData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div className="flex justify-center shadow-md p-3 border-b">
        <input
          type="text"
          placeholder="Search for a book"
          className="border-2 p-2 mx-2 rounded-md w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
      <div className=" mx-auto lg:w-[80%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-3 m-3 p-4 ">
          {currentItems.map((item, index) => (
            <Link to={`/scripture/${item.name}`}>
              <div
                key={index}
                className="cursor-pointer sm:w-44 sm:h-52 w-full border p-2 rounded-lg overflow-hidden bg-orange-300 hover:bg-orange-500"
              >
                <h1 className="text-center font-bold mt-5">{item.name}</h1>
                <p className="text-center text-sm mt-2">{item.description}</p>
                <div className="mt-2 text-center font-semibold">
                  Chapters : {item.chapters}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4 relative bottom-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-3 py-1 border rounded ${
                page === currentPage ? "bg-orange-500 text-white" : "bg-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
