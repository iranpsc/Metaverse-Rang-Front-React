import { useContext, useState } from "react";

import { BsExclamationCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { AlertContext } from "../../../services/reducers/AlertContext";
import Button from "../../../components/Button";
import InfoModal from "./InfoModal";
import TitleValue from "./TitleValue";
import { addCommas } from "@persian-tools/persian-tools";
import useRequest from "../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../services/Utility";

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  div:first-of-type {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4px;
  left: 4px;
  svg {
    font-size: 16px;
    color: #3b3b3b;
    cursor: pointer;
    z-index: 99;
  }
  div {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: white;
  }
`;

const PhotoContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  padding: 2px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bgOne};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 840px) {
    width: 60px;
    height: 60px;
    img {
      width: 34px;
      height: 34px;
    }
  }
`;

const InfoRow = ({ data, type, shop, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const { setAlert } = useContext(AlertContext);
  const { Request, HTTP_METHOD } = useRequest();

  const buyHandler = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const paymentHandler = (asset, amount) => {
    Request("order", HTTP_METHOD.POST, { asset, amount }).then((response) => {
      window.location.href = response?.data?.link;
    });
  };

  const getAssetTranslation = () => {
    if (data.asset === "yellow") {
      return getFieldTranslationByNames("11");
    } else if (data.asset === "red") {
      return getFieldTranslationByNames("12");
    } else if (data.asset === "blue") {
      return getFieldTranslationByNames("13");
    } else if (data.asset === "irr") {
      return getFieldTranslationByNames("906");
    } else if (data.asset === "psc") {
      return getFieldTranslationByNames("47");
    }
  };

  return (
    <>
      <Wrapper openModal={openModal}>
        <div>
          <PhotoContainer>
            <IconWrapper>
              <div />
              <BsExclamationCircleFill onClick={() => setOpenModal(true)} />
            </IconWrapper>
            <img width={54} height={54} alt={data.image} src={data.image} />
          </PhotoContainer>
          <TitleValue
            shop={shop}
            title={` ${getFieldTranslationByNames("511")}`}
            value={getAssetTranslation()}
          />
        </div>
        <TitleValue
          shop={shop}
          title={` ${getFieldTranslationByNames("510")}`}
          value={`${data.amount.toLocaleString()} ${getFieldTranslationByNames("14")}`}
        />
        <TitleValue
          shop={shop}
          title={`${getFieldTranslationByNames("509")}`}
          value={`${addCommas(
            (data.amount * data.unitPrice) / 10
          )} ${getFieldTranslationByNames("10")}`}
        />
        <Button
          row
          label={getFieldTranslationByNames("353")}
          onclick={() => {
            paymentHandler(data.asset, data.amount);
          }}
        />
      </Wrapper>
      {openModal && (
        <InfoModal data={data} type={type} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default InfoRow;
