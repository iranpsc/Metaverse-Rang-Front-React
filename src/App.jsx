import { useLayoutEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "./i18n/i18n.js";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import UserProvider from "./Services/Reducers/UserContext.jsx";
import WalletProvider from "./Services/Reducers/WalletContext";
import FollowProvider from "./Services/Reducers/FollowContext";
import { MapContextProvider } from "./Services/Reducers/mapContext";
import { ThemeProviderContext } from "./Services/Reducers/ThemeContext";
import Map from "./Layouts/Map";
import Menu from "./Layouts/Menu";
import StatusBar from "./Layouts/StatusBar";
import Tutorial from "./Components/Tutorial";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  gap: 5px;
  background: #000;
  padding: 5px;
  @media (min-width: 768px) {
    gap: 10px;
    padding: 10px;
  }
`;

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
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };
  return (
    <ThemeProviderContext>
      <UserProvider>
        <WalletProvider>
          <FollowProvider>
            <MapContextProvider>
              <BrowserRouter>
                {/* <Tutorial /> */}

                <Container>
                  <Menu />
                  <Map />
                  <StatusBar />
                </Container>
                {/* <button
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
                </button> */}
                <Toaster
                  containerStyle={{ zIndex: 1000, marginBottom: 48 }}
                  position="bottom-right"
                />
              </BrowserRouter>
            </MapContextProvider>
          </FollowProvider>
        </WalletProvider>
      </UserProvider>
    </ThemeProviderContext>
  );
}

export default App;
