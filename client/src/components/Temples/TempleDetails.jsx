import React from "react";

const TempleDetails = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/temple.jpg"
          alt="temple"
          className=" w-full h-[80vh] object-cover "
        />
        <div className="absolute w-full bottom-3 flex items-center justify-between px-5">
          <div>
            <h1 className=" sm:text-4xl font-bold ml-2">Rambireshwar Temple</h1>
            <div className="flex">
              <img src="/star.svg" alt="star" className=" sm:w-10" />
              <img src="/star.svg" alt="star" className=" sm:w-10" />
              <img src="/star.svg" alt="star" className=" sm:w-10" />
              <img src="/star.svg" alt="star" className=" sm:w-10" />
              <img src="/star.svg" alt="star" className=" sm:w-10" />
            </div>
          </div>
          <div>
            <button className="px-4 py-3 rounded-lg bg-[#525252] text-white">
              +100 Photos
            </button>
          </div>
        </div>
      </div>
      <div className="m-4">
        <h1 className=" text-3xl font-bold">About</h1>
        <p className=" mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
          asperiores consectetur labore placeat recusandae veniam? Asperiores
          qui a, molestias, quam in odio sed architecto, consequuntur deserunt
          culpa numquam recusandae?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi repellendus eos voluptatibus. Iure quod
          quaerat nulla soluta voluptatibus adipisci beatae!
        </p>
      </div>
      <hr className="mx-5" />
      <div className="m-4 flex items-center justify-center gap-20 sm:h-[60vh]">
        <div className=" sm:ml-10">
          <h1 className=" mt-3 sm:text-3xl text-xl font-bold">
            Where Will you find
          </h1>
          <h1 className=" mt-3 sm:text-3xl text-xl text-slate-500">
            View the location map
          </h1>
        </div>
        <div className="h-full">
          <img
            src="/map.jpg"
            alt="map"
            className="h-[85%] rounded-2xl object-contain"
          />
          <div>
            <h1 className=" text-xl font-bold">Rambireshwar Temple</h1>{" "}
            <p>NR6 Banaras </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetails;
