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
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme/theme.js";
import { useState } from "react";
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
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <UserProvider>
        <WalletProvider>
          <FollowProvider>
            <BrowserRouter>
              {/* <Tutorial /> */}
              <Map />
              <button
                onClick={toggleTheme}
                style={{ zIndex: 1500, top: 0, position: "absolute" }}
              >
                {isDarkTheme ? (
                  <span aria-label="Light mode" role="img">
                    🌞
                  </span>
                ) : (
                  <span aria-label="Dark mode" role="img">
                    🌜
                  </span>
                )}
              </button>
              <Toaster
                containerStyle={{ zIndex: 1000, marginBottom: 48 }}
                position="bottom-right"
              />
            </BrowserRouter>
          </FollowProvider>
        </WalletProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
