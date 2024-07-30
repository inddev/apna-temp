import React from "react";

const Sidebar = () => {
  return (
    <div className="w-56 bg-orange-200 rounded-md border border-slate-900 sidebar">
      <div className="m-4">
        <h1 className="text-lg font-bold ">Scriptures</h1>
        <ul className="ml-3 mt-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" name="vedas" id="vedas" />
            <label htmlFor="vedas">Vedas</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="upanishads" id="upanishads" />
            <label htmlFor="upanishads">Upanishads</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="puranas" id="puranas" />
            <label htmlFor="vedas">Puranas</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="ramayan" id="ramayan" />
            <label htmlFor="ramayan">Ramanyan</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="mahabharat" id="bhagavadGita" />
            <label htmlFor="bhagavadGita">Mahabharat</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="mahabharat" id="mahabharat" />
            <label htmlFor="mahabharat">Mahabharat</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
