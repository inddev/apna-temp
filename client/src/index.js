import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panchang from "./components/Astrology/Panchang";
import Scriptures from "./components/searchBook/Scriptures";
import Temple from "./components/Temples/Temple";
import ScriptureDetail from "./components/searchBook/ScriptureDetail";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ForgotPassword from "./components/Auth/ForgotPassword";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./components/Auth/Profile";
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
        path: "/scripture/:scriptureName",
        element: <ScriptureDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
