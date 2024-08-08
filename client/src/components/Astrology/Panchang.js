import React from "react";
import Card from "./Card";
import Festivals from "./Festivals";
import Astroger from "./Astroger";
import { data } from "../../utils/data";

const Panchang = () => {
  // console.log(data);
  const { name, diety, start, end, special, type } = data?.tithi;
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-2 items-start">
        <div className=" col-span-1">
          <div className="bg-[#FDF7EA] border shadow-lg m-2 rounded-lg p-5">
            <h1 className=" sm:text-3xl text-xl font-bold mt-5">Tithi</h1>
            <div className=" mt-5">
              <div className="flex justify-start items-start gap-4">
                <img src="/tithi_icon.svg" className="w-28" alt="tithi_icon" />
                <div>
                  <h1 className="lg:text-2xl p-0 text-lg font-semibold leading-3">
                    {name}
                    <span className=" text-[7px] ml-1 border-1 rounded-[20px] py-1 px-2 bg-[#81AB85] border-[#6A8C6C] text-[#D5E5D6]">
                      NOW
                    </span>
                  </h1>
                  <p className=" text-sm lg:text-md text-slate-600">{diety}</p>
                  <p className=" text-[12px] lg:text-md text-slate-600">
                    {type}
                  </p>
                  <div className=" text-[11px] lg:text-md text-red-700">
                    <span>{start}</span> | <span>{end}</span>
                  </div>
                  <div className=" text-[12px] lg:text-md text-[#069B03]">
                    {special}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border shadow-lg m-2 rounded-lg">
            <h1 className="sm:text-3xl text-xl font-bold">
              Sun and Moon Timings
            </h1>
            <div>
              <div className=" flex justify-start items-center font-bold sm:py-5 py-2">
                <h1 className="sm:text-2xl text-lg text-[#FF725E] w-[20%]">
                  Sun
                </h1>
                <div className=" flex justify-center gap-3 items-center">
                  <div className="flex gap-1 items-center justify-start sm:text-xl text-sm text-[#979697]">
                    <img
                      src="/sunrise.svg"
                      alt="sunrise"
                      className="w-5 mr-1"
                    />
                    <p>{data.advanced_details.sun_rise}</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start sm:text-xl text-sm text-[#979697]">
                    <img src="/sunset.svg" alt="sunet" className="w-5 mr-1" />
                    <p>{data.advanced_details.sun_set}</p>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center font-bold sm:py-5 py-2">
                <h1 className="sm:text-2xl text-lg text-[#FF725E] w-[20%]">
                  Moon
                </h1>
                <div className=" flex justify-center gap-3 items-center">
                  <div className="flex gap-1 items-center justify-start sm:text-xl text-sm text-[#979697]">
                    <img
                      src="/moonrise.svg"
                      alt="moonrise"
                      className="w-5 mr-1"
                    />
                    <p>{data.advanced_details.moon_rise}</p>
                  </div>
                  <div className="flex gap-1 items-center justify-start sm:text-xl text-sm text-[#979697]">
                    <img
                      src="/moonset.svg"
                      alt="moonset"
                      className="w-5 mr-1"
                    />
                    <p>{data.advanced_details.moon_set}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 m-2 shadow-lg rounded-lg">
            <h1 className="text-[#4D6968] text-2xl font-bold ml-4">
              Auspicious/Inauspicious Time
            </h1>
            <div className="grid grid-cols-2 p-2 gap-1">
              <div className="bg-[#D4E8B7] rounded-lg p-2 text-center m-1">
                <h1 className="text-[#069B03]">Abhiji Muhurat</h1>
                <div className=" font-bold text-sm">
                  {data.advanced_details.abhijit_muhurta.start}-
                  {data.advanced_details.abhijit_muhurta.end}
                </div>
              </div>
              <div className="bg-[#F4F5D6] rounded-lg p-2 text-center m-1">
                <h1 className="text-[#455A64]">Abhiji Muhurat</h1>
                <div className=" font-bold text-sm">
                  11.59 <span className="text-[#9799A1] text-[11px]">am</span> -
                  12.26 <span>pm</span>
                </div>
              </div>
              <div className="bg-[#F8D7B6] rounded-lg p-2 text-center m-1">
                <h1 className="text-[#263238]">Abhiji Muhurat</h1>
                <div className=" font-bold text-sm">
                  11.59 <span className="text-[#9799A1] text-[11px]">am</span> -
                  12.26 <span>pm</span>
                </div>
              </div>
              <div className="bg-[#EFCECE] rounded-lg p-2 text-center m-1">
                <h1 className="text-[#455A64]">Abhiji Muhurat</h1>
                <div className=" font-bold text-sm">
                  11.59 <span className="text-[#9799A1] text-[11px]">am</span> -
                  12.26 <span>pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-lg p-5 m-2 col-span-2 rounded-2xl ">
          <div className="flex justify-between items-center">
            <h1 className=" text-[#4F6B6B] text-4xl font-semibold">
              More about the day
            </h1>
            <div className=" text-[#E6AF68] font-bold cursor-pointer">
              What is This?{" "}
            </div>
          </div>
          <Card cardData={data.nakshatra} />
          <Card cardData={data.karana} />
          <Card cardData={data.yoga} />
          <div>
            <div className="flex gap-10 p-4 my-3 ">
              <h1 className="text-[#BABABA]">AYANA</h1>
              <h1 className="font-semibold">AYANA_NAME</h1>
            </div>
            <div className="flex gap-10 p-4 my-3">
              <h1 className="text-[#BABABA]">RITU</h1>
              <h1 className="font-semibold">RITU_HINDI</h1>
            </div>
            <div className="flex gap-10 p-4 my-3">
              <h1 className="text-[#BABABA]">VAR</h1>
              <h1 className="font-semibold">VAR_HINDI</h1>
            </div>
            <div className="flex gap-10 p-4 my-3">
              <h1 className="text-[#BABABA]">DISHA</h1>
              <h1 className="font-semibold">DISHA_SOOL</h1>
            </div>
            <div className="flex gap-10 p-4 my-3">
              <h1 className="text-[#BABABA]">RASI</h1>
              <h1 className="font-semibold">RASI_NAME</h1>
            </div>
          </div>
        </div>
      </div>
      <Festivals />
      <Astroger />
    </div>
  );
};

export default Panchang;
