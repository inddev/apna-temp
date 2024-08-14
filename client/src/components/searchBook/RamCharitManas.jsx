import axios from "axios";
import React, { useState, useEffect } from "react";

const RamCharitManas = () => {
  const [data, setData] = useState([]);
  const [selectedKaand, setSelectedKaand] = useState("बालकाण्ड");
  const [selectedType, setSelectedType] = useState("श्लोक");

  useEffect(() => {
    const fetchRamacharitmanas = () => {
      axios
        .get(`http://localhost:8000/api/user/ramcharitmanas/${selectedKaand}`)
        .then((data) => {
          setData(data.data.data);
          setSelectedType("श्लोक");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchRamacharitmanas();
  }, [selectedKaand]);
  const selectedTypeData = data.filter((item) => item.type === selectedType);
  // console.log(selectedTypeData);

  if (selectedTypeData.length <= 0) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div>
      <div className="md:flex text-center justify-center gap-11 items-center p-4 border-b shadow-sm">
        <h1 className=" text-xl font-bold mb-2">Shree Ramcharitmanas</h1>
        <select
          value={selectedKaand}
          onChange={(e) => setSelectedKaand(e.target.value)}
          className="border p-3 rounded-lg shadow-sm"
        >
          <option value="बालकाण्ड">बालकाण्ड </option>
          <option value="अयोध्या काण्ड">अयोध्या काण्ड </option>
          <option value="अरण्य काण्ड">अरण्य काण्ड </option>
          <option value="किष्किन्धा काण्ड">किष्किन्धा काण्ड </option>
          <option value="सुंदर काण्ड">सुंदर काण्ड </option>
          <option value="लंका काण्ड">लंका काण्ड </option>
          <option value="उत्तर काण्ड">उत्तर काण्ड </option>
        </select>
        <select
          className="border p-3 rounded-lg ml-3 shadow-sm"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="श्लोक">श्लोक</option>
          <option value="दोहा/सोरठा">दोहा/सोरठा</option>
          <option value="चौपाई">चौपाई</option>
        </select>
      </div>
      <div className="p-4">
        {selectedTypeData.map((item, index) => (
          <div
            key={index}
            className="p-4 border shadow-sm mb-4 mx-auto mt-2 rounded-md bg-orange-200"
          >
            <h2 className="text-lg font-bold ">
              <span>{index + 1}.</span>
              {item.content}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamCharitManas;
