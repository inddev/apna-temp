import "./App.css";
import Panchang from "./components/Panchang";
import Scriptures from "./components/searchBook/Scriptures";
import Temple from "./components/Temple";
import { data } from "./utils/data";



function App() {
  // console.log(data.tithi);
  return (
    <div className="App">
      {/* <Panchang panchange={data} /> */}
      {/* <Temple /> */}
      <Scriptures />
    </div>
  );
}

export default App;
