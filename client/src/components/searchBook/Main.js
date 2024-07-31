import { useState, useEffect } from "react";
import axios from "axios";
import VerseCard from "./VerseCard";
const Main = () => {
  const [data, setData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedVerse, setSelectedVerse] = useState(1);
  // console.log(selectedChapter);
  useEffect(() => {
    fetchData();
  }, [selectedChapter]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/user/verse/${selectedChapter}`
    );
    setData(response.data.message);
  };
  const selectedVerseData = data.find((verse) => verse.verse === selectedVerse);
  // console.log("Data", selectedVerseData);
  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
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
      <div className=" flex items-center justify-center gap-5 p-4 shadow-lg">
        <h1 className=" text-xl font-bold">Shrimad Bhagavat Gita</h1>
        <select
          value={selectedChapter}
          onChange={(e) => {
            setSelectedChapter(parseInt(e.target.value));
            setSelectedVerse(1);
          }}
          className="border p-3 rounded-lg"
        >
          {chapters.map((chapter) => (
            <option key={chapter} value={chapter}>
              Chapter {chapter}
            </option>
          ))}
        </select>
        <select
          value={selectedVerse}
          onChange={(e) => {
            setSelectedVerse(parseInt(e.target.value));
          }}
           className="border p-3 rounded-lg"
        >
          {data.map((verse) => (
            <option key={verse.verse} value={verse.verse}>
              Verse {verse.verse}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[80%]  mx-auto mt-10 flex justify-center items-baseline">
        {selectedVerseData && (
          <VerseCard
            text={selectedVerseData.text}
            translations={selectedVerseData.translations}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
