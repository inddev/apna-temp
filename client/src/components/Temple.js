import React from "react";
import TempleDetails from "./TempleDetails";
import LongDescription from "./LongDescription";
import ContactPandit from "./ContactPandit";
import Facility from "./Facility";
import CardTemple from "./CardTemple";
import FestiveCard from "./FestiveCard";
import Ratings from "./Ratings";

const Temple = () => {
  return (
    <div>
      <TempleDetails />
      <hr className="mx-5" />
      <div className="m-5">
        <h1 className="text-xl font-bold">Visiting Hourse</h1>
        <div>
          <button className="flex items-center m-2 gap-2 py-2 px-4 border-2 rounded-2xl">
            <img src="/time.svg" alt="time" />
            6AM-9PM
          </button>
        </div>
        <h1 className="text-xl font-bold">Aarti timings</h1>
        <div className="sm:flex gap-3 mt-3">
          <div className="flex w-max gap-3 mt-3 items-center justify-start  py-2 px-4 border-2 rounded-2xl">
            <img src="/time.svg" alt="time" className="w-7" />
            <div>
              <h1 className="text-xl font-semibold">Morning Aarti</h1>
              <p>7:00 AM,12:00 PM,7:00 PM</p>
            </div>
          </div>
          <div className="flex w-max gap-3 mt-3 items-center justify-start py-2 px-4 border-2 rounded-2xl">
            <img src="/time.svg" alt="time" className="w-7" />
            <div>
              <h1 className="text-xl font-semibold">Afternoon Aarti</h1>
              <p>7:00 AM,12:00 PM,7:00 PM</p>
            </div>
          </div>
          <div className="flex w-max gap-3 mt-3 items-center justify-start py-2 px-4 border-2 rounded-2xl">
            <img src="/time.svg" alt="time" className="w-7" />
            <div>
              <h1 className="text-xl font-semibold">Evening Aarti</h1>
              <p>7:00 AM,12:00 PM,7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-5" />
      <div className=" sm:m-5 m-3">
        <h1 className="text-xl font-bold">Gods</h1>
        <div className=" flex sm:gap-4 gap-2 flex-wrap mt-3">
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
          <CardTemple />
        </div>
      </div>
      <hr className=" mx-5" />
      <div className=" sm:m-5 m-3">
        <h1 className="text-xl font-bold">Festive Insights</h1>
        <div className=" flex sm:gap-4 gap-2 mt-3 flex-wrap">
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
          <FestiveCard />
        </div>
      </div>
      <LongDescription />
      <ContactPandit />
      <Facility />
      <hr className=" mx-5" />
      <Ratings />
    </div>
  );
};

export default Temple;
