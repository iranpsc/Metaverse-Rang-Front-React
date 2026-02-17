import { useLayoutEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // Import useNavigate
import { Toaster } from "react-hot-toast";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import "./i18n/i18n.js";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import UserProvider from "./services/reducers/UserContext.jsx";
import WalletProvider from "./services/reducers/WalletContext";
import FollowProvider from "./services/reducers/FollowContext";
import { MapContextProvider } from "./services/reducers/mapContext";
import { ThemeProviderContext } from "./services/reducers/ThemeContext";
import { MapProvider } from "react-map-gl";
import { SelectedEnvironmentProvider } from "./services/reducers/SelectedEnvironmentContext.jsx";
import { AlertProvider } from "./services/reducers/AlertContext.jsx";
import Routers from "./layouts/map/Routers.jsx";
import { LanguageProvider } from "./services/reducers/LanguageContext.jsx";
import { LoaderProvider } from "./services/reducers/LoaderProvider.jsx";
import RotateDevice from "./components/RotateDevice";
import Error410Modal from "./components/Error410Modal";
import { useAppHeight } from "./hooks/useAppHeight.js";
import { ScrollDirectionProvider } from "./services/reducers/ScrollDirectionContext.jsx";
function App() {
  useAppHeight();

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

  return (<LanguageProvider>

    <BrowserRouter>
      <ScrollDirectionProvider>
        <LoaderProvider>
          <MapProvider>
            <ThemeProviderContext>
              <UserProvider>
                <WalletProvider>
                  <FollowProvider>
                    <SelectedEnvironmentProvider>
                      <MapContextProvider>
                        <AlertProvider>
                          <RotateDevice />
                          <Routers />

                          <Error410Modal />
                          <Toaster
                            containerStyle={{
                              zIndex: 100000,
                              marginBottom: 48,
                            }}
                            position="bottom-right"
                          />
                        </AlertProvider>
                      </MapContextProvider>
                    </SelectedEnvironmentProvider>
                  </FollowProvider>
                </WalletProvider>
              </UserProvider>
            </ThemeProviderContext>
          </MapProvider>
        </LoaderProvider>
      </ScrollDirectionProvider>
    </BrowserRouter>              </LanguageProvider>

  );
}

export default App;
