import React from "react";

const FestivalCard = () => {
  return (
    <div className="flex flex-col gap-1 mt-3 m-3 sm:p-2 p-5">
      <img src="/god.png" alt="god" className="" />
      <h1 className="text-xl font-bold">Devshyani Ekadashi</h1>
      <p className=" text-slate-400">
        Commemorating the start of Lord Vishnu’s cosmic sleep.
      </p>
      <div className=" flex items-center text-xl text-[#FF8A00]">
        More details{" "}
        <span>
          {" "}
          <img src="/seeall.svg" alt="seeall" className=" w-3 ml-2" />
        </span>
      </div>
    </div>
  );
};

export default FestivalCard;
