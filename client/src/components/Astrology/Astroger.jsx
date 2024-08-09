import React from "react";

const Astroger = () => {
  return (
    <div>
      <div className="p-5 ">
        <h1 className=" text-2xl font-bold mb-3">Contact Astrologer</h1>
        <div className="sm:flex gap-4 overflow-hidden ">
          <div className="flex gap-4 items-center sm:p-3 p-2 justify-between border shadow-md sm:w-80 mb-3 rounded-2xl">
            <img src="/astrologer.png" alt="astrologer" />
            <div className=" flex justify-between w-[80%] items-center">
              <div>
                <h1>Title</h1>
                <p>Subtitle</p>
              </div>
              <button className="cursor-pointer bg-slate-300 text-orange-400 px-5 py-2 rounded-3xl">
                Call
              </button>
            </div>
          </div>
          <div className="flex  gap-4 items-center sm:p-3 p-2 justify-between border shadow-md sm:w-80 mb-3 rounded-2xl">
            <img src="/astrologer.png" alt="astrologer" />
            <div className=" flex justify-between w-[80%] items-center">
              <div>
                <h1>Title</h1>
                <p>Subtitle</p>
              </div>
              <button className="cursor-pointer bg-slate-300 text-orange-400 px-5 py-2 rounded-3xl">
                Call
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center sm:p-3 p-2 justify-between border shadow-md sm:w-80 mb-3 rounded-2xl">
            <img src="/astrologer.png" alt="astrologer" />
            <div className=" flex justify-between w-[80%] items-center">
              <div>
                <h1>Title</h1>
                <p>Subtitle</p>
              </div>
              <button className="cursor-pointer bg-slate-300 text-orange-400 px-5 py-2 rounded-3xl">
                Call
              </button>
            </div>
          </div>

          <div className=" bg-orange-400 flex justify-center items-center p-2 rounded-xl">
            View all
          </div>
        </div>
      </div>
      <div className="m-5 shadow-md rounded-md p-5">
        <h1 className="text-2xl font-bold">Additional Details</h1>
        <div className="sm:flex gap-5">
          <div className=" py-5 sm:w-1/2">
            <h1 className=" text-2xl font-bold ml-3">Masa</h1>
            <div className="bg-[#FDF7EA] p-3 rounded-3xl mt-4">
              <div className="mt-2">
                <p>Amanta Name - </p>
                <p className=" text-[12px] text-slate-500">Amanta Number - </p>
                <p className="text-[#FF725E]">
                  Amanta start time - | amanta end time -{" "}
                </p>
              </div>
              <div className="mt-2">
                <p>Purnimata Name - </p>
                <p className=" text-[12px] text-slate-500">
                  Purnimata Number -{" "}
                </p>
                <p className="text-[#FF725E]">
                  Purnimata start time - | Purnimata end time -{" "}
                </p>
              </div>
              <div className="mt-2">
                <h1>Ritu Tamil - </h1>
                <p className="text-slate-400 text-[12px]">
                  Tamil day - | Tamil month - Aani{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 py-5">
            <h1 className="text-2xl font-bold ml-3">Year</h1>
            <div className="bg-[#FDF7EA] p-3 rounded-3xl mt-4">
              <div className=" mt-2">
                <p>Kali Sawant Name</p>
                <p className="text-[#FFB23F]">kali_number - 5125</p>
              </div>
              <div className="mt-2">
                <p>Saka samnvant name</p>
                <p className="text-[#FFB23F]">saka_number - 5125</p>
              </div>
              <div className="mt-2">
                <p>Vikram Smawant Name</p>
                <p className="text-[#FFB23F]">vikram smavant_number - 5125</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astroger;
