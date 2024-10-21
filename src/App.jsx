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
import UserProvider from "./Services/Reducers/UserContext.jsx";
import WalletProvider from "./Services/Reducers/WalletContext";
import FollowProvider from "./Services/Reducers/FollowContext";
import { MapContextProvider } from "./Services/Reducers/mapContext";
import { ThemeProviderContext } from "./Services/Reducers/ThemeContext";
import MapTreeD from "./Layouts/Map";
import Menu from "./Layouts/Menu";
import StatusBar from "./Layouts/StatusBar";
import { MenuContextProvider } from "./Services/Reducers/MenuContext";
import { MapProvider } from "react-map-gl";
import { SelectedEnvironmentProvider } from "./Services/Reducers/SelectedEnvironmentContext.jsx";
import { AlertProvider } from "./Services/Reducers/AlertContext.jsx";
import Routers from "./Layouts/Map/Routers.jsx";
import { getFieldTranslationByNames } from "./Services/Utility/index.jsx";
import { LanguageProvider } from "./Services/Reducers/LanguageContext.jsx";

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
        <LanguageProvider>
          <UserProvider>
            <WalletProvider>
              <FollowProvider>
                <SelectedEnvironmentProvider>
                  <MapContextProvider>
                    <AlertProvider>
                      <BrowserRouter>
                        <Routers />
                        <Container>
                          <MenuContextProvider>
                            <Menu />
                          </MenuContextProvider>
                          <MapTreeD />
                          <StatusBar />
                        </Container>

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
  );
}

export default App;
