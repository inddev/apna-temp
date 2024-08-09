import React from "react";

const Facility = () => {
  return (
    <div className="m-5">
      <h1 className=" text-xl font-bold">Facilities Available</h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 gap-2 grid-cols-2 mt-4 sm:gap-5 ">
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/parking.png" alt="facility-icon" />
          <h1>Parking Available</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-2.png" alt="facility-icon" />
          <h1>Parking Available</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-3.png" alt="facility-icon" />
          <h1>Wheelchair access</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-4.png" alt="facility-icon" />
          <h1>Locker Access</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-5.png" alt="facility-icon" />
          <h1>Guided tour</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-6.png" alt="facility-icon" />
          <h1>First Aid</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-7.png" alt="facility-icon" />
          <h1>Accommodation Access</h1>
        </div>
        <div className=" border px-5 py-3 flex justify-start gap-6 items-center rounded-2xl ">
          <img src="/f-8.png" alt="facility-icon" />
          <h1>Food Available</h1>
        </div>
      </div>
    </div>
  );
};

export default Facility;
