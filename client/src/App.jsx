import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

function App() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "e95914d00b4344b28c08d04e8571a4b5",
    channel: "apnasanatan",
    token:
      "007eJxTYLjmLt3V22eQZDDNyefXRLfw38lJJR3XG5ktDh0Kkqr12qvAkGppamlokmJgkGRibGKSZGSRbGCRYmCSamFqbphokmTqY30irSGQkYFlSxMrIwMEgvjcDIkFeYnFiXmJJYl5DAwAsBYgRw==",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {videoCall ? (
        <div style={{ display: "flex", width: "100vw", height: "80vh" }}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
      ) : (
        <h3 onClick={() => setVideoCall(true)}>Join</h3>
      )} */}
    </div>
  );
}

export default App;
