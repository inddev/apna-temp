import React, { memo } from "react";

const VerseCard = ({ text, translations }) => {
  return (
    <div className="p-4 text-center shadow-md rounded-md m-3 bg-orange-400">
      <p className="text-lg mb-4 font-semibold">{text}</p>
      <div>
        <ul className="">
          {translations.swamiTejomayananda && (
            <li className="mt-2">{translations.swamiTejomayananda}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(VerseCard);
