import { Outlet, Route, Routes } from "react-router-dom";

import Search from "../../pages/Search";
import PrivateRoute from "../../routes/PrivateRoute";
import Report from "../../pages/Report";
import Sanad from "../../pages/Sanad";
import Settings from "../../pages/Settings";
import Notifications from "../../pages/Notifications";
import Store from "../../pages/Store";
import PublicRoute from "../../routes/PublicRoute";
import PaymentVerification from "../../pages/Payments/Verification";
import Profile from "../../pages/Profile";
import Verification from "../../pages/Verification";
import Feature from "../../pages/Feature";

import Commercial from "../../components/Lottie/Commercial";
import Residential from "../../components/Lottie/Residential";
import Educational from "../../components/Lottie/Educational";
import SignupLottie from "../../components/Lottie/SignupLottie";
import Player from "../../pages/Player";
import Dynasty from "../../pages/Dynasty";
import HourMeterProfit from "../../pages/HourMeterProfit";
import TransactionPayments from "../../pages/Payments/Verification/transactionPayments";

import Ip from "../../pages/Ip";
import EmailVerification from "../../pages/EmailVerification";
import AccountSecurityModal from "../../pages/AccountSecurity";
//import { ProfileInfoProvider } from './services/reducers/profileInfoContext.jsx';

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
