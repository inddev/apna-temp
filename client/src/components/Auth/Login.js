import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../utils/userSlice";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userDetails }));
    // console.log(isAuthenticated); 
    if (isAuthenticated) {
      navigate("/");
    }
  };

  return (
    <div className="">
      <div className="lg:w-96 md:w-[50%] sm:w-[70%] w-[90%] m-5 border shadow-md p-4 mx-auto mt-20 rounded-md">
        <h1 className="text-2xl text-center">Login to my Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="Enter your email..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
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
              value={userDetails.password}
              onChange={handleChange}
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
      <h1 className="text-center mt-10">
        New Customer?{" "}
        <Link className="text-orange-800" to={"/register"}>
          Create your account.
        </Link>{" "}
      </h1>
      <h1 className="text-center mt-2">
        Forgot password?{" "}
        <Link className="text-orange-800" to={"/forgot-password"}>
          Reset your Password.
        </Link>{" "}
      </h1>
    </div>
  );
};

export default Login;
