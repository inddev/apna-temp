import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Workspace = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="main ">{children}</div>
      </div>
    </div>
  );
};

export default Workspace;
