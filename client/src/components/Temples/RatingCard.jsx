import React from "react";

const RatingCard = ({ rating }) => {
  // console.log(rating);
  const { name, remark, dsc, date } = rating;
  return (
    <div className=" border-2 md:min-w-96 flex-wrap border-slate-300 rounded-xl p-5 mt-3">
      <div className="flex gap-3">
        <img src="/user.png" className="w-10" alt="user" />
        <div>
          <h1 className="ml-1 font-bold">{name}</h1>
          <div className="flex mt-1 items-center">
            <img src="/star.svg" className="w-4" alt="star" />
            <img src="/star.svg" className="w-4" alt="star" />
            <img src="/star.svg" className="w-4" alt="star" />
            <img src="/star.svg" className="w-4" alt="star" />
            <img src="/star.svg" className="w-4" alt="star" />
            <p className="text-[10px] font-bold relative bottom-[2px]">
              . 16 Dec 2021
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold">{remark}</h1>
        <p>{dsc}</p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h1 className="text-slate-500">visited Date</h1>
          <p>{date}</p>
        </div>
        <button className="rounded-full border-2 p-3">
          <img src="vote.png" alt="vote" />
        </button>
      </div>
    </div>
  );
};

export default RatingCard;
