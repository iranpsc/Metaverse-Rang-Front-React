import React from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackIcon from "../../../../../Assets/images/back.png";
import CrossIcon from "../../../../../Assets/images/cross-2.png";
import CheckIcon from "../../../../../Assets/images/check.png";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  border: 1px solid #777;
  border-radius: 7px;
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
const StatusContainer=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  & img {
    width: 30px;
  }
  & p{
font-size: 16px;
  }
`
function getStatusText(statusCode) {
  const statusDict = {
    0: { text: "در دست بررسی", image: "" },
    "-1": { text: "رد شده", image: CrossIcon },
    1: { text: "تایید شده", image: CheckIcon },
  };
  return statusDict[statusCode] || "";
}
export default function Message({ items, handleBack }) {
  const { Request } = useRequest();
  const [data, setData] = useState();
  useEffect(() => {
    Request(`dynasty/requests/sent/${items.id}`).then((response) => {
      setData(response.data.data);
    });

  }, []);
  
  const status = getStatusText(data?.status);

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
              }}
              onClick={() =>
                window.open(
                  `https://rgb.irpsc.com/citizen/${data?.to_user.code}`,
                  "_blank"
                )
              }
            >
              {data?.to_user.code}
            </span>
            درخواست ارسال شده به شهروند
          </h2>
        </Header>
        <StatusContainer>
          {status.image && <img src={status.image} alt="وضعیت" />}
          <p>{status.text}</p>
        </StatusContainer>
        <p dangerouslySetInnerHTML={{ __html:data? data.message :""}} ></p>
      </ContainerMessage>
    </Container>
  );
}
