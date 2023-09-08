import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "react-quill/dist/quill.snow.css";

import Map from "./Layouts/Map";
import UserProvider from "./Services/Reducers/UserContext.jsx";
import WalletProvider from "./Services/Reducers/WalletContext";
import FollowProvider from "./Services/Reducers/FollowContext";
import { useLayoutEffect } from "react";
import "./i18n/i18n.js";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Tutorial from "./Components/Tutorial";

function App() {
  useLayoutEffect(() => {
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "local",
      cluster: "",
      wsHost: "api.rgb.irpsc.com",
      wsPort: 6001,
      wssPort: 6001,
      encrypted: true,
      forceTLS: true,
      disableStats: true,
      enabledTransports: ["wss", "ws"],
    });
  }, []);

  return (
    <UserProvider>
      <WalletProvider>
        <FollowProvider>
          <BrowserRouter>
            {/* <Tutorial /> */}
            <Map />

            <Toaster
              containerStyle={{ zIndex: 1000, marginBottom: 48 }}
              position="bottom-right"
            />
          </BrowserRouter>
        </FollowProvider>
      </WalletProvider>
    </UserProvider>
  );
}

export default App;
