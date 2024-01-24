import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "react-quill/dist/quill.snow.css";

import Map from "./Layouts/Map";
import UserProvider from "./Services/Reducers/UserContext.jsx";
import WalletProvider from "./Services/Reducers/WalletContext";
import FollowProvider from "./Services/Reducers/FollowContext";
import React, { useLayoutEffect } from "react";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Tutorial from "./Components/Tutorial";
import styled from "styled-components";

const Massage = styled.div`
  background-color: white;
  display: flex;
  position: absolute;
  z-index: 1200;
  width: 100vw;
  height: 100vh;
  top: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (min-width: 1024px) {
    display: none;
  }
  padding: 0 10px;
`;

const Btn = styled.div`
  width: 50%;
  min-height: 39px;
  @media (min-width: 1024px) {
    min-height: 49px;
  }
  background-color: #d7fbf0;
  color: #18c08f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  margin-top: 10px;
  gap: 5px;
`;
const Text = styled.p`
  display: block;
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
    <UserProvider>
      <WalletProvider>
        <FollowProvider>
          <BrowserRouter>
            {/* <Tutorial /> */}
            <Map />

            <Massage>
              <p>نسخه موبایل بزودی در دسترس قرار میگیرد</p>
              <p>
                جهت مشاهده فعالیت دیزاین و ریدیزاین متاورس رنگ, در{" "}
                <a href="https://www.figma.com/file/Rs8cdjPco3ovjPHFyxZPuC/RGB%F0%9F%9F%A2%F0%9F%94%B5%F0%9F%94%B4?type=design&node-id=332%3A2&mode=design&t=njy0XNbcPxRwN7ao-1">
                  فیگما
                </a>{" "}
                با ما همراه باشید
              </p>
              <p>
                جهت
                <a href="https://faq.irpsc.com/questions/question/the-design-of-metaverse-color-pages-of-the-new-version/">
                  {" "}
                  ثبت نظر و پیشنهاد
                </a>{" "}
                در رابطه با ریدیزاین و طراحی صفحات, در انجمن متاورس رنگ با ما در
                ارتباط باشید.
              </p>
              <Btn
                onClick={() => {
                  window.open(
                    "https://rgb.irpsc.com/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.02 1.82258L2.63 6.02258C1.73 6.72258 1 8.21258 1 9.34258V16.7526C1 19.0726 2.89 20.9726 5.21 20.9726H16.79C19.11 20.9726 21 19.0726 21 16.7626V9.48258C21 8.27258 20.19 6.72258 19.2 6.03258L13.02 1.70258C11.62 0.722584 9.37 0.772584 8.02 1.82258Z"
                    stroke="#18C08F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 16.9725V13.9725"
                    stroke="#18C08F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text>خانه</Text>
              </Btn>
            </Massage>
            <Toaster
              containerStyle={{ zIndex: 1000, marginBottom: 48 }}
              position="bottom-right"
            />
          </BrowserRouter>
        </FollowProvider>
      </WalletProvider>
    </UserProvider>
  );
}

export default App;
