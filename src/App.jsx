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
import { MenuContextProvider } from "./Services/Reducers/MenuContext";

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
                  <Map />
                  <StatusBar />
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
  );
}

export default App;
