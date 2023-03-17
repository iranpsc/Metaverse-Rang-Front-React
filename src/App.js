import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "react-quill/dist/quill.snow.css";

import Map from "./Layouts/Map";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Security from "./Pages/Security";
import UserProvider from "./Services/Reducers/UserContext.js";
import PrivateRoute from "./Routes/PrivateRoute";
import Report from "./Pages/Report";
import Settings from "./Pages/Settings";
import Notifications from "./Pages/Notifications";
import Store from "./Pages/Store";
import PublicRoute from "./Routes/PublicRoute";
import ForgetPassword from "./Pages/ForgetPassword";
import PaymentVerification from "./Pages/Payments/Verification";
import Profile from "./Pages/Profile";
import Sanad from "./Pages/Sanad";
import Verification from "./Pages/Verification";
import Feature from "./Pages/Feature";
import UploadAvatar from "./Pages/UploadAvatar";
import WalletProvider from "./Services/Reducers/WalletContext";
import Commercial from "./Components/Lottie/Commercial";
import Residential from "./Components/Lottie/Residential";
import Educational from "./Components/Lottie/Educational";
import SignupLottie from "./Components/Lottie/SignupLottie";
import Player from "./Pages/Player";
import FollowProvider from "./Services/Reducers/FollowContext";
import Dynasty from "./Pages/Dynasty";
import { useLayoutEffect } from "react";
import Echo from "laravel-echo";
import Pusher from 'pusher-js';
import Tutorial from "./Components/Tutorial";


function App() {
  useLayoutEffect(() => {
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 'local',
      cluster: '',
      wsHost: 'api.rgb.irpsc.com',
      wsPort: 6001,
      wssPort: 6001,
      encrypted: true,
      forceTLS: true,
      disableStats: true,
      enabledTransports: ['wss', 'ws']
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
            <Routes>
              <Route path="/metaverse" element={<Outlet />}>
                <Route
                  path="login"
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />

                <Route
                  path="signup"
                  element={
                    <PublicRoute>
                      <Signup />
                    </PublicRoute>
                  }
                />

                <Route
                  path="sanad"
                  element={
                    <PrivateRoute>
                      <Sanad />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="reset-password"
                  element={
                    <PublicRoute>
                      <ForgetPassword />
                    </PublicRoute>
                  }
                />

                <Route
                  path="confirmation"
                  element={
                    <PrivateRoute>
                      <Security />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="report"
                  element={
                    <PrivateRoute>
                      <Report />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="settings"
                  element={
                    <PrivateRoute>
                      <Settings />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="player/:id"
                  element={
                    <PrivateRoute>
                      <Player />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="notifications"
                  element={
                    <PrivateRoute>
                      <Notifications />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="verification"
                  element={
                    <PrivateRoute>
                      <Verification />
                    </PrivateRoute>
                  }
                />
                
                <Route
                  path="dynasty"
                  element={
                    <PrivateRoute>
                      <Dynasty />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="store"
                  element={
                    <PrivateRoute>
                      <Store />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="payment/verify"
                  element={
                    <PrivateRoute>
                      <PaymentVerification />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="verification"
                  element={
                    <PrivateRoute>
                      <Verification />
                    </PrivateRoute>
                  }
                />

                <Route path="feature/:id" element={<Feature />} />

                <Route
                  path="upload/avatar"
                  element={
                    <PrivateRoute>
                      <UploadAvatar />
                    </PrivateRoute>
                  }
                />

                <Route path="successful" element={<Outlet />}>
                  <Route path="commercial" element={<Commercial />} />

                  <Route path="residential" element={<Residential />} />

                  <Route path="educational" element={<Educational />} />

                  <Route path="signup" element={<SignupLottie />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </FollowProvider>
      </WalletProvider>
    </UserProvider>
  );
}

export default App;
