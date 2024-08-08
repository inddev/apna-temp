import React from "react";
import Sidebar from "./Sidebar";

const Workspace = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="main ">{children}</div>
      </div>
    </div>
  );
};

export default Workspace;
