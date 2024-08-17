import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Workspace = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // console.log(results);
  useEffect(() => {
    handleSearch();
  }, [query]);

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

  // console.log(results.length > 0);

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="main">
          <div >
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
           </div>
            <div className="lg:grid grid-cols-2 p-3">
              {results.length > 1 &&
                results.map((text, i) => {
                  return (
                    <div key={i} className="p-3 border m-2 shadow-sm rounded-md bg-orange-300">
                      {text._source.book && (
                        <p className="text-lg">
                          <div className="font-semibold">
                            <span className="mr-2">
                              Book No.{text._source.book}
                            </span>
                            <span className="mr-2">
                              Chapter No.{text._source.chapter}
                            </span>
                            <span className="mr-2">
                              Shloka - {text._source.shloka}
                            </span>
                          </div>
                          <HighlightText
                            text={text._source.text}
                            highlight={query}
                          />
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          {results.length > 0 ? "" : <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Workspace;

const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};
