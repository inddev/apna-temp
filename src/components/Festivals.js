import React from "react";
import FestivalCard from "./FestivalCard";
import BhajanCard from "./BhajanCard";

const Festivals = () => {
  return (
    <div>
      <div className=" flex justify-between items-center m-5">
        <h1 className=" text-3xl font-bold">Festivals & Vrat</h1>
        <div className=" flex gap-2 items-center text-xl text-[#FF8A00]">
          See all <img src="/seeall.svg" alt="seeall" />
        </div>
      </div>
      <div className="p-2 sm:flex overflow-hidden gap-3">
        <FestivalCard />
        <FestivalCard />
        <FestivalCard />
        <FestivalCard />
        <FestivalCard />
        <FestivalCard />
      </div>
      <div className="sm:flex overflow-hidden mt-4">
        <BhajanCard />
        <BhajanCard />
        <BhajanCard />
        <BhajanCard />
        <BhajanCard />
      </div>
    </div>
  );
};

export default Festivals;
