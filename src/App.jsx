import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom"; // Import useNavigate
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "./i18n/i18n.js";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import UserProvider from "./services/reducers/UserContext.jsx";
import WalletProvider from "./services/reducers/WalletContext";
import FollowProvider from "./services/reducers/FollowContext";
import { MapContextProvider } from "./services/reducers/mapContext";
import { ThemeProviderContext } from "./services/reducers/ThemeContext";
import MapTreeD from "./layouts/map";
import Menu from "./layouts/menu";
import statusBar from "./layouts/statusBar";
import { MenuContextProvider } from "./services/reducers/MenuContext";
import { MapProvider } from "react-map-gl";
import { SelectedEnvironmentProvider } from "./services/reducers/SelectedEnvironmentContext.jsx";
import { AlertProvider } from "./services/reducers/AlertContext.jsx";
import Routers from "./layouts/map/Routers.jsx";
import { getFieldTranslationByNames } from "./services/Utility/index.jsx";
import { LanguageProvider } from "./services/reducers/LanguageContext.jsx";
import { LoaderProvider } from "./services/reducers/LoaderProvider.jsx";
import RotateDevice from "./components/RotateDevice";
import Error410Modal from "./components/Error410Modal";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 5px;
  @media (min-width: 768px) {
    gap: 10px;
    padding: 10px;
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
 <LoaderProvider>
    <MapProvider>
      <ThemeProviderContext>
        <LanguageProvider>
          <UserProvider>
            <WalletProvider>
              <FollowProvider>
                <SelectedEnvironmentProvider>
                  <MapContextProvider>
                    <AlertProvider>
                      <BrowserRouter>
                        <RotateDevice />
                        <Routers />
                        <Container>
                          <MenuContextProvider>
                            <Menu />
                          </MenuContextProvider>
                          <MapTreeD />
                          <StatusBar />
                        </Container>
                        <Error410Modal />
                        <Toaster
                          containerStyle={{ zIndex: 100000, marginBottom: 48 }}
                          position="bottom-right"
                        />
                      </BrowserRouter>
                    </AlertProvider>
                  </MapContextProvider>
                </SelectedEnvironmentProvider>
              </FollowProvider>
            </WalletProvider>
          </UserProvider>
        </LanguageProvider>
      </ThemeProviderContext>
    </MapProvider>
    </LoaderProvider>
  );
}


export default App;
