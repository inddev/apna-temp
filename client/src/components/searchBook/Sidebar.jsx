import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../utils/scriptureSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.scripture.selectedCategory
  );

  const categories = [
    "All",
    "Vedas",
    "Upanishads",
    "Puranas",
    "Ramayana",
    "Mahabharata",
  ];

  return (
    <div className="w-56 bg-orange-500 rounded-md sidebar hidden sm:block">
      <div className="m-4">
        <h1 className="text-lg font-bold ">Scriptures</h1>
        <ul className="ml-3 mt-2">
          {categories.map((category) => (
            <li key={category}>
              <input
                type="radio"
                name="category"
                id={category}
                value={category}
                checked={selectedCategory === category}
                onChange={() => dispatch(setSelectedCategory(category))}
              />
              <label htmlFor={category} className="ml-2">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
