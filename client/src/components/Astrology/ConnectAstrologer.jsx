import {
  LocalUser,
  RemoteUser,
  useIsConnected,
  useJoin,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

const ConnectAstrologer = () => {
  const [calling, setCalling] = useState(false); // Is calling
  const [appId, setAppId] = useState(""); // Store the app ID state
  const [channel, setChannel] = useState(""); // Store the channel name state
  const [token, setToken] = useState(""); // Store the token state
  const isConnected = useIsConnected(); // Use app ID, channel name and token to join the channel.
  // Whether to join the channel depends on the status of calling
  useJoin({ appid: appId, channel: channel, token: token || null }, calling);

  const [micOn, setMic] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  usePublish([localMicrophoneTrack]);

  const remoteUsers = useRemoteUsers();
  console.log("remote users", remoteUsers);
  console.log("Local User1111", LocalUser);
  return (
    <div className="app-container">
      {isConnected ? (
        <>
          <div className="flex gap-3 border p-4">
            <div className="">
              <LocalUser
                audioTrack={localMicrophoneTrack}
                micOn={micOn}
                cover="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              >
                <samp className="user-name">You</samp>
              </LocalUser>
            </div>
            {remoteUsers.map((user) => (
              <div key={user.uid}>
                <RemoteUser
                  cover="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  user={user}
                >
                  {" "}
                  <samp className="user-name">{user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
          <div className="control">
            <button className="btn" onClick={() => setMic((prev) => !prev)}>
              {micOn ? "Mute" : "Unmute"}
            </button>
            <button
              className={`btn btn-phone ${calling ? "btn-phone-active" : ""}`}
              onClick={() => setCalling((prev) => !prev)}
            >
              {calling ? <FaPhoneAlt /> : <ImPhoneHangUp />}
            </button>
          </div>
        </>
      ) : (
        <div className="join-room">
          <img alt="Agora logo" className="w-28 mb-5" src="/unknown.jpg" />
          <input
            onChange={(e) => setAppId(e.target.value)}
            placeholder="Your App ID"
            value={appId}
            className="rounded p-2 shadow-sm mb-2"
          />
          <input
            onChange={(e) => setChannel(e.target.value)}
            placeholder="Your Channel Name"
            value={channel}
            className="rounded p-2 shadow-sm mb-2"
          />
          <input
            onChange={(e) => setToken(e.target.value)}
            placeholder="Your Token"
            value={token}
          />
          <button
            className={`join-channel ${!appId || !channel ? "disabled" : ""}`}
            disabled={!appId || !channel}
            onClick={() => setCalling(true)}
          >
            <span>Join Channel</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectAstrologer;
