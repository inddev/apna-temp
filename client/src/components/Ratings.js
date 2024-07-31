import React from "react";
import RatingCard from "./RatingCard";

const Ratings = () => {
  const ratings = [
    {
      id: 1,
      name: "jack Danial",
      remark: "Good Place",
      dsc: "Something to review here.",
      date: "Dec 23",
    },
    {
      id: 2,
      name: "jack Danial",
      remark: "Good Place",
      dsc: "Something to review here.",
      date: "Dec 23",
    },
    {
      id: 3,
      name: "jack Danial",
      remark: "Good Place",
      dsc: "Something to review here.",
      date: "Dec 23",
    },
  ];

  return (
    <div className="m-5 ">
      <div className="sm:max-w-[50vw] sm:mx-auto">
        <h1 className="text-lg font-bold sm:text-2xl">Ratings</h1>
        <div>4.0</div>
        <div className="rounded-2xl mt-3">
          <img src="/ratings.svg" alt="ratings" className="w-full" />
        </div>
        <button className="bg-orange-500 w-full py-3 mt-3 text-white rounded-xl text-center">
          Write a Review
        </button>
        <p className=" my-3">
          Product reviews are managed by a third party to verify authenticity
          and compliance with our{" "}
          <span className="cursor-pointer text-orange-500 underline">
            Ratings & Reviews Guidelines
          </span>
        </p>
      </div>
      <hr />
      <div className=" mt-4">
        <h1 className="text-lg font-bold sm:text-2xl">Ratings</h1>
        <div>4.5(100 Reviews)</div>
        <div className="sm:flex gap-3">
          {ratings.map((rating) => {
            return <RatingCard key={rating.id} rating={rating} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
