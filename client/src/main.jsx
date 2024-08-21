import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "../src/utils/store.js";
import Panchang from "./components/Astrology/Panchang.jsx";
import Scriptures from "./components/searchBook/Scriptures.jsx";
import Temple from "./components/Temples/Temple.jsx";
import ScriptureDetail from "./components/searchBook/ScriptureDetail";
import Profile from "./components/Profile.jsx";
import RamCharitManas from "./components/searchBook/RamCharitManas.jsx";
import Mahabharata from "./components/searchBook/Mahabharata.jsx";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Panchang />,
      },
      {
        path: "/yoga-wellness",
        element: (
          <div className="text-center text-lg mt-10 font-bold">
            Yoga and Wellness
          </div>
        ),
      },
      {
        path: "/information",
        element: <Scriptures />,
      },
      {
        path: "/e-commerce",
        element: (
          <div className="text-center mt-10 text-lg font-bold">E-commerce</div>
        ),
      },
      {
        path: "/community",
        element: (
          <div className="text-center mt-10 text-lg font-bold">Community</div>
        ),
      },
      {
        path: "/temples",
        element: <Temple />,
      },
      {
        path: "/scripture/1",
        element: <RamCharitManas />,
      },
      {
        path: "/scripture/2",
        element: <Mahabharata />,
      },
      {
        path: "/scripture/3",
        element: <ScriptureDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

createRoot(document.getElementById("root")).render(
  <AgoraRTCProvider client={client}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Auth0Provider>
  </AgoraRTCProvider>
);
