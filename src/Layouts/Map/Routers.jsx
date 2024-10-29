import { Outlet, Route, Routes } from "react-router-dom";

import Search from "../../Pages/Search";
import PrivateRoute from "../../Routes/PrivateRoute";
import Report from "../../Pages/Report";
import Sanad from "../../Pages/Sanad";
import Settings from "../../Pages/Settings";
import Notifications from "../../Pages/Notifications";
import Store from "../../Pages/Store";
import PublicRoute from "../../Routes/PublicRoute";
import PaymentVerification from "../../Pages/Payments/Verification";
import Profile from "../../Pages/Profile";
import Verification from "../../Pages/Verification";
import Feature from "../../Pages/Feature";

import Commercial from "../../Components/Lottie/Commercial";
import Residential from "../../Components/Lottie/Residential";
import Educational from "../../Components/Lottie/Educational";
import SignupLottie from "../../Components/Lottie/SignupLottie";
import Player from "../../Pages/Player";
import Dynasty from "../../Pages/Dynasty";
import HourMeterProfit from "../../Pages/HourMeterProfit";
import TransactionPayments from "../../Pages/Payments/Verification/transactionPayments";

import Ip from "../../Pages/Ip";
import EmailVerification from "../../Pages/EmailVerification";
import AccountSecurityModal from "../../Pages/AccountSecurity";

export default function Routers() {
  return (
    <Routes>
      <Route path="/metaverse" element={<Outlet />}>
        <Route
          path="sanad"
          element={
            <PrivateRoute>
              <Sanad />
            </PrivateRoute>
          }
        />

        <Route
          path="verification-email"
          element={
            <PublicRoute>
              <EmailVerification />
            </PublicRoute>
          }
        />
        <Route
          path="confirmation"
          element={
            <PrivateRoute>
              <AccountSecurityModal />
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
          path="transaction"
          element={
            <PrivateRoute>
              <TransactionPayments />
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
          path="search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="hour-profit"
          element={
            <PrivateRoute>
              <HourMeterProfit />
            </PrivateRoute>
          }
        />
        <Route
          path="access-ip"
          element={
            <PublicRoute>
              <Ip />
            </PublicRoute>
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
  );
}
