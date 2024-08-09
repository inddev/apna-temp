import React from "react";

const ScriptureCard = ({ scripture }) => {
  const { name, description, chapters } = scripture;
  return (
    <div className="sm:w-44 sm:h-52 w-52 h-64 border p-2 rounded-lg overflow-hidden bg-orange-300 hover:bg-orange-500">
      <h1 className="text-center font-bold mt-5">{name}</h1>
      <p className="text-center text-sm mt-2">{description}</p>
      <div className="mt-2 text-center font-semibold">
        Chapters : {chapters}
      </div>
    </div>
  );
};

export default ScriptureCard;
