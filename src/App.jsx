import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom"; // Import useNavigate
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import "./App.css";
import "react-quill/dist/quill.snow.css";


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
    <MapProvider>
      <ThemeProviderContext>
        <LanguageProvider>
          <UserProvider>
            <WalletProvider>
              <FollowProvider>
                <MapContextProvider>
                  <AlertProvider>
                    <BrowserRouter>
                      <Routers />
                      <Container>
                        <MenuContextProvider>
                          <Menu />
                        </MenuContextProvider>
                        <SelectedEnvironmentProvider>
                          <MapTreeD />
                        </SelectedEnvironmentProvider>
                        <StatusBar />
                      </Container>

                      <Toaster
                        containerStyle={{ zIndex: 100000, marginBottom: 48 }}
                        position="bottom-right"
                      />
                    </BrowserRouter>
                  </AlertProvider>
                </MapContextProvider>
              </FollowProvider>
            </WalletProvider>
          </UserProvider>
        </LanguageProvider>
      </ThemeProviderContext>
    </MapProvider>
  );
}

export default App;
