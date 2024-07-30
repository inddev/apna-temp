import "./App.css";
import Panchang from "./components/Panchang";
import Workspace from "./components/searchBook/Workspace";
import Temple from "./components/Temple";
import { data } from "./utils/data";

function App() {
  // console.log(data.tithi);
  return (
    <div className="App">
      {/* <Panchang panchange={data} /> */}
      {/* <Temple /> */}
      <Workspace />
    </div>
  );
}

export default App;
