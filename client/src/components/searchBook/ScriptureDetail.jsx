import VerseCard from "./VerseCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ScriptureDetail = () => {
  const [data, setData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedVerse, setSelectedVerse] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/user/verse/${selectedChapter}`
      );
      setData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }, [selectedChapter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const selectedVerseData = data.find((verse) => verse.verse === selectedVerse);

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div>
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

export default ScriptureDetail;
