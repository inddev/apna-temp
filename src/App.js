import "./App.css";
import Panchang from "./components/Panchang";
import SearchBook from "./components/searchBook/SearchBook";
import Temple from "./components/Temple";
import { data } from "./utils/data";

function App() {
  // console.log(data.tithi);
  return (
    <div className="App">
      {/* <Panchang panchange={data} /> */}
      {/* <Temple /> */}
      <SearchBook />
    </div>
  );
}

export default App;
