import { useEffect, useState } from "react";
import styled from "styled-components";
import PercentageImage from "../../Assets/images/percentage.png";
import useAuth from "../../Services/Hooks/useAuth";
import ToolTip from "../Tooltip";

const ProfitIcon = styled.img`
  width: 56px;
`;

const Container = styled.div``;

const PercentCoin = styled.span`
  position: absolute;
  bottom: -10%;
  right: -10%;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(234 184 72 / var(--tw-bg-opacity));
  aspect-ratio: 1/1;
`;

const PercentText = styled.p`
  box-shadow: inset 0 1px 5px 1px rgb(0 0 0 / 40%);
  aspect-ratio: 1/1;
  --tw-bg-opacity: 1;
  background-color: rgb(234 184 72 / var(--tw-bg-opacity));
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-family: iransans !important;
  font-size: 16px;
  font-weight: bold;
`;

export default function PercentageIcon({onClick}) {
  const { getUser } = useAuth();
  const [Percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(getUser().hourly_profit_time_percentage);
  }, [getUser]);

  return (
    <ToolTip
      Chidren={
        <Container onClick={onClick}>
          <ProfitIcon src={PercentageImage} />

          <PercentCoin>
            <PercentText>{Percentage}</PercentText>
          </PercentCoin>
        </Container>
      }
      TitleToltip={"سود انباشته"}
      ContentToltip={"جمع آوری و ذخیره سود از سرمایه و دارایی ها"}
      classNamePosstion={"tw-righticon"}
    />
  );
}
