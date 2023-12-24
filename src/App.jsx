import { useEffect, useLayoutEffect, useState } from "react";
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
import MapTreeD from "./Layouts/Map";
import Menu from "./Layouts/Menu";
import StatusBar from "./Layouts/StatusBar";
import Tutorial from "./Components/Tutorial";
import { MenuContextProvider } from "./Services/Reducers/MenuContext";
import { MapProvider } from "react-map-gl";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  gap: 5px;
  background-color: ${(props) => props.theme.bgMain};
  padding: 5px;
  @media (min-width: 768px) {
    gap: 10px;
    padding: 10px;
  }
  .leaflet-tile {
    filter: ${(props) => props.theme.filterMap};
  }
  transition: all 0.3s ease 0s;
`;

function App() {
  const [isFullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape").catch((error) => {
        console.error("Failed to change to landscape mode:", error);
      });
    }
  }, [isFullScreen]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setFullScreen(!isFullScreen);
  };

  console.log(useTranslation());
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
    <MapProvider>
      <ThemeProviderContext>
        <UserProvider>
          <WalletProvider>
            <FollowProvider>
              <MapContextProvider>
                <BrowserRouter>
                  {/* <Tutorial /> */}

                  <Container>
                    <MenuContextProvider>
                      <Menu />
                    </MenuContextProvider>
                    <MapTreeD />
                    <StatusBar />
                    <button
                      onClick={toggleFullScreen}
                      style={{
                        width: "20px",
                        position: "absolute",
                        top: 0,
                        right: "10px",
                      }}
                    >
                      +++
                    </button>
                  </Container>

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
    </MapProvider>
  );
}

export default App;
