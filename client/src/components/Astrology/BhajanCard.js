import React from "react";

const BhajanCard = () => {
  return (
    <div className="flex gap-4 min-w-96 m-2 border shadow-lg p-3 rounded-xl">
      <img src="/special.png" alt="pooja" className="w-[25%]" />
      <div>
        <h1 className=" text-xl font-bold">Special Bhajan</h1>
        <p className="flex">
          <img src="/sound.png" alt="sound-icon" className="w-5" />{" "}
          <li className=" list-disc ml-3">4 min</li>
        </p>
        <p className=" text-[#FF8A00] flex items-center gap-2">
          Start Prartana{" "}
          <img src="/right.png" alt="right-arrow" className="w-3" />
        </p>
      </div>
    </div>
  );
};

export default BhajanCard;
