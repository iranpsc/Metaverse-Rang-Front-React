import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "react-quill/dist/quill.snow.css";

import Map from "./Layouts/Map";
import UserProvider from "./Services/Reducers/UserContext.jsx";
import WalletProvider from "./Services/Reducers/WalletContext";
import FollowProvider from "./Services/Reducers/FollowContext";
import { useEffect, useLayoutEffect } from "react";
import "./i18n/i18n.js";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Tutorial from "./Components/Tutorial";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/theme.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  useEffect(() => {
    window.screen.orientation.lock("landscape");

    return () => {
      window.screen.orientation.unlock();
    };
  }, []);
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };
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
              <button
                onClick={() => changeLanguage("en")}
                style={{ zIndex: 1500, top: 30, position: "absolute" }}
              >
                en
              </button>
              <button
                onClick={() => changeLanguage("fa")}
                style={{ zIndex: 1500, top: 60, position: "absolute" }}
              >
                he
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
