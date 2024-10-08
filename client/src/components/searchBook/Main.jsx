import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  setCurrentPage,
  setSortBy,
} from "../../utils/scriptureSlice";
import { Link } from "react-router-dom";
import ScriptureCard from "./ScriptureCard";
const Main = () => {
  const dispatch = useDispatch();
  const { search, currentPage, itemsPerPage, data, selectedCategory, sortBy } =
    useSelector((state) => state.scripture);
  const filteredData = data
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "name_asc") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "name_desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="">
      <div className="flex justify-center p-3 border-b">
        <input
          type="text"
          placeholder="Search for a book"
          className="border-2 p-2 mx-2 rounded-md sm:w-96"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="border-2 p-2 mx-2 rounded-md"
        >
          <option value="">All</option>
          <option value="name_asc">Sort by name asc</option>
          <option value="name_desc">Sort by name desc</option>
        </select>
      </div>
      <div className=" mx-auto lg:w-[90%]">
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 md:grid-rows-3 md:grid-cols-3 sm:grid-rows-4 sm:grid-cols-2 grid-cols-3 grid-rows-3 justify-items-center sm:gap-3 sm:m-3 p-4 ">
          {currentItems.map((item, index) => (
            <Link
              to={`/scripture/${item.id}`}
              className="h-full shadow-md w-full border p-3 rounded-lg overflow-hidden bg-orange-300 hover:bg-orange-500"
              key={item.id}
            >
              <ScriptureCard scripture={item} key={item.id} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4 relative bottom-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => dispatch(setCurrentPage(page))}
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
