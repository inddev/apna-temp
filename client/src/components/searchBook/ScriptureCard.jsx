import React from "react";

const ScriptureCard = ({ scripture }) => {
  const { name, description, chapters, thumbnail,category } = scripture;
  return (
    <div>
      {thumbnail && <img className="object-fill " src={thumbnail} alt="book" />}
      <h1 className="font-bold">{name}</h1>
      <div className="mt-1 font-semibold">
        Chapters : {chapters} 
      </div>
    </div>
  );
};

export default ScriptureCard;
