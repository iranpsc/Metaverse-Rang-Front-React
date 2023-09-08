import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginSwitch() {
  const navigate = useNavigate();
  const Container = styled.div`
    width: 100%;
    display: flex;
    height: 66px;
    padding: 8px 0px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  `;
  const BtnRegistry = styled.button`
    display: flex;
    width: 53%;
    height: 100%;
    padding: 16px 52.5px 13px 53px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    background: #008bf8;
    color: #d4ecff;
    text-align: center;
    font-family: AzarMehr-DS2;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    gap: 3px;
  `;
  const BtnLogin = styled.button`
    display: flex;
    width: 44%;
    height: 50px;
    padding: 14px 45.929px 13.707px 45px;
    justify-content: center;
    gap: 3px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    border-radius: 10px;
    background: #d4ecff;
    color: #008bf8;
    text-align: center;
    font-family: AzarMehr-DS2;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
  `;
  const Icon = styled.svg`
    width: 13.335px;
    height: 19.81px;
  `;
  return (
    <Container>
      <BtnRegistry onClick={() => navigate("/metaverse/signup")}>
        <Icon>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 18.5H10.5"
              stroke="#d4ecff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 20.5V16.5"
              stroke="#d4ecff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.1601 9.87C8.0601 9.86 7.9401 9.86 7.8301 9.87C5.4501 9.79 3.5601 7.84 3.5601 5.44C3.5501 2.99 5.5401 1 7.9901 1C10.4401 1 12.4301 2.99 12.4301 5.44C12.4301 7.84 10.5301 9.79 8.1601 9.87Z"
              stroke="#d4ecff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99004 20.8101C6.17004 20.8101 4.36004 20.3501 2.98004 19.4301C0.560039 17.8101 0.560039 15.1701 2.98004 13.5601C5.73004 11.7201 10.24 11.7201 12.99 13.5601"
              stroke="#d4ecff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Icon>
        ثبت نام
      </BtnRegistry>
      <BtnLogin onClick={() => navigate("/metaverse/login")}>
        <Icon>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 16 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.03042 10.0863C7.92726 10.0761 7.80347 10.0761 7.69 10.0863C5.23484 10.0044 3.28516 8.00683 3.28516 5.54829C3.28516 3.03854 5.32768 1 7.86537 1C10.3927 1 12.4456 3.03854 12.4456 5.54829C12.4353 8.00683 10.4856 10.0044 8.03042 10.0863Z"
              stroke="#008BF8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.87232 13.8663C0.375895 15.5258 0.375895 18.2302 2.87232 19.8795C5.70916 21.7644 10.3616 21.7644 13.1984 19.8795C15.6948 18.22 15.6948 15.5156 13.1984 13.8663C10.3719 11.9917 5.71947 11.9917 2.87232 13.8663Z"
              stroke="#008BF8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Icon>
        ورود
      </BtnLogin>
    </Container>
  );
}

export default LoginSwitch;
