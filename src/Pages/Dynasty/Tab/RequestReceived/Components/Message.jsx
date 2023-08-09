import React from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackIcon from "../../../../../Assets/images/back.png";
import CrossIcon from "../../../../../Assets/images/cross-2.png";
import CheckIcon from "../../../../../Assets/images/check.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Submit from "../../../../../Components/Buttons/Submit";
import { ToastError, ToastSuccess } from "../../../../../Services/Utility";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerMessage = styled.div`
  width: 99%;
  height: 99%;
  padding: 10px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  flex-direction: column;
  text-align: right;
  padding: 0.5rem;
  line-height: 2;
`;

const IconBack = styled.img`
  width: 50px;
  rotate: 360deg;
  transform: rotateY(185deg);
  cursor: pointer;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  & img {
    width: 30px;
  }
  & p {
    font-size: 16px;
  }
`;
function getStatusText(statusCode) {
  const statusDict = {
    0: { text: "در دست بررسی", image: "" },
    "-1": { text: "رد شده", image: CrossIcon },
    1: { text: "تایید شده", image: CheckIcon },
  };
  return statusDict[statusCode] || "";
}
export default function Message({ items, handleBack }) {
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState();
  useEffect(() => {
    Request(`dynasty/requests/recieved/${items.id}`).then((response) => {
      setData(response.data.data);
    });
  }, []);

  const status = getStatusText(data?.status);
  const handleSubmit = () => {
    Request(`dynasty/requests/recieved/${items.id}`, HTTP_METHOD.POST)
      .then((response) => {
        ToastSuccess("سلسله با موفقیت تاسیس شد.");
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return Navigate("/metaverse/confirmation");
        }
        ToastError(error.response.data.message);
      });
  };
  return (
    <Container>
      <ContainerMessage>
        <Header>
          <IconBack src={BackIcon} onClick={handleBack} />
          <h2>
            <span
              style={{
                fontWeight: "600",
                color: "blue",
                cursor: "pointer",
                fontFamily: "Segoe UI",
                textTransform: "uppercase",
              }}
              onClick={() =>
                window.open(
                  `https://rgb.irpsc.com/citizen/${data?.from_user.code}`,
                  "_blank"
                )
              }
            >
              {data?.from_user.code}
            </span>{" "}
            درخواست دریافت شده از شهروند
          </h2>
        </Header>
        <StatusContainer>
          {status.image && <img src={status.image} alt="وضعیت" />}
          <p>{status.text}</p>
        </StatusContainer>
        <p>{data ? data.message : ""}</p>
        {data?.status === 0 && (
          <Submit
            text="تایید سلسله"
            type="primary"
            options={{
              onClick: handleSubmit,
              style: {
                margin: "0 auto",
              },
            }}
          />
        )}
      </ContainerMessage>
    </Container>
  );
}
