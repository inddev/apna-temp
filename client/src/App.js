import { Outlet } from "react-router-dom";
import "./App.css";
import Panchang from "./components/Panchang";
import Navbar from "./components/searchBook/Navbar";
import Scriptures from "./components/searchBook/Scriptures";
import Temple from "./components/Temple";


function App() {
  // console.log(data.tithi);
  return (
    <div className="App">
      {/* <Panchang panchange={data} /> */}
      {/* <Temple /> */}
      {/* <Scriptures /> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
