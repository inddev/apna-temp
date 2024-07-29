import React from "react";

const FestiveCard = () => {
  return (
    <div className="relative w-32 h-32 overflow-hidden rounded-lg">
      <img
        src="/festive-image.jpg"
        className="w-full h-full object-cover"
        alt="festive-image"
      />
      <h1 className=" absolute bottom-5 ml-3 font-bold text-white">Name</h1>
    </div>
  );
};

export default FestiveCard;
