import { useContext, useState } from "react";

import { BsExclamationCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { AlertContext } from "../../../Services/Reducers/AlertContext";
import Button from "../../../Components/Button";
import InfoModal from "./InfoModal";
import TitleValue from "./TitleValue";

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  direction: rtl;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a18;
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
  background-color: #000000;
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

const InfoRow = ({ data, type, shop }) => {
  const [openModal, setOpenModal] = useState(false);
  const { setAlert } = useContext(AlertContext);
  const buyHandler = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
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
            <img
              width={54}
              height={54}
              loading="lazy"
              alt={data.image}
              src={data.image}
            />
          </PhotoContainer>
          <TitleValue
            shop={shop}
            title={`نوع ${type}`}
            value={`${type === "ابزار" ? "رنگ" : ""} ${data.type}`}
          />
        </div>
        <TitleValue
          shop={shop}
          title={`تعداد ${type}`}
          value={`${data.amount
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} عدد`}
        />
        <TitleValue
          shop={shop}
          title="مبلغ(تومان)"
          value={`${data.price
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} تومان`}
        />
        <Button row label="خرید" onclick={buyHandler} />
      </Wrapper>
      {openModal && (
        <InfoModal data={data} type={type} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default InfoRow;
