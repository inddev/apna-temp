import React from "react";

const Card = ({ cardData }) => {
  const { name, diety, start, end, special } = cardData;

  return (
    <div className=" bg-[#FDF7EA] rounded-2xl flex gap-5  py-2 px-5 mt-4">
      <img className=" min-w-20" src="/Image.svg" alt="panchang" />
      <div>
        <p className="text-[#8E8981] font-bold">{name}</p>
        <p className=" text-[#B9B2A9] ">{diety}</p>
        <div className=" text-[#FF725E] font-bold text-[12px] sm:text-base">
          <span>{start}</span> | <span>{end}</span>
        </div>
        <div className=" text-[#03C539] font-bold text-[12px] sm:text-base">{special}</div>
      </div>
    </div>
  );
};

export default Card;
