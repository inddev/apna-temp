import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Workspace = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:8000/search", {
        params: { query },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="main">
          <div className="text-center">
            <input
              type="text"
              className="border p-2 w-96 rounded-md my-2 text-lg"
              placeholder="Search anything from scriptures"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />{" "}
            <button
              onClick={handleSearch}
              className="bg-green-400 px-4 py-2 text-white text-xl rounded-lg"
            >
              Search
            </button>
            <div>
              {results.length > 1 &&
                results.map((text, i) => {
                  return (
                    <div key={i}>
                      <p className="text-lg mb-2 border-b">
                        {text._source.text}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
