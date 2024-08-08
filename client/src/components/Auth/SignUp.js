import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold mt-20">Create My Account</h1>
      <div className="lg:w-96 md:w-[50%] sm:w-[70%] w-[90%] m-5 border shadow-md p-4 mx-auto  rounded-md">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="firstName"
            >
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="lastName"
            >
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-full p-2 px-
          4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
