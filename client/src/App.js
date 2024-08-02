import { Outlet } from "react-router-dom";
import "./App.css";
// import Panchang from "./components/Panchang";
import Navbar from "./components/searchBook/Navbar";
// import Scriptures from "./components/searchBook/Scriptures";
// import Temple from "./components/Temple";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  // console.log(data.tithi);
  return (
    <Provider store={store}>
      {/* <Panchang panchange={data} /> */}
      {/* <Temple /> */}
      {/* <Scriptures /> */}
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
