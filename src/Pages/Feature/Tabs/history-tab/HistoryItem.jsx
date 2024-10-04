import { HiOutlineUser } from "react-icons/hi";
import Pricing from "./Pricing";

import styled from "styled-components";
import TitleValue from "../../../Store/shop/TitleValue";
import { convertToPersian } from "../../../../Services/Utility";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 10px;
  display: grid;

  align-items: center;
  grid-template-columns: 3fr 2fr 2fr 2fr;
`;
const UserTime = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Time = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  span {
    &:first-of-type {
      font-size: 20px;
      font-weight: 600;
    }
    &:last-of-type {
      font-weight: 400;
      font-size: 9px;
    }
  }
  @media (min-width: 998px) {
    width: 80px !important;
    height: 80px !important;
    span {
      &:first-of-type {
        font-weight: 600;
      }
      &:last-of-type {
        font-size: 13px;
      }
    }
  }
`;
const User = styled.div`
  h4 {
    color: ${(props) => (props.owner ? "#FFFFFF" : "#0066ff")};
    font-size: 12px;
    a {
      color: #0066ff;
      text-decoration: none;
    }
  }
  @media (min-width: 998px) {
    h4 {
      font-size: 16px;
    }
  }
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  gap: 4px;
  color: #a0a0ab;
  span {
    font-size: 12px;
  }
  @media (min-width: 998px) {
    span {
      font-size: 14px;
    }
  }
`;
const HistoryItem = ({ date, user, link, time, owner }) => {
  return (
    <Container>
      <UserTime>
        <Time>
          <span>{convertToPersian(date.day)}</span>
          <span>{date.month}</span>
        </Time>
        <User owner={owner}>
          <Div>
            {owner ? (
              <span>مالک اولیه</span>
            ) : (
              <>
                <HiOutlineUser size={20} />
                <span>خریداری شده </span>
              </>
            )}
          </Div>
          {owner ? (
            <h4>{user}</h4>
          ) : (
            <h4>
              <a href={`${link}`}>{user}</a>
            </h4>
          )}
        </User>
      </UserTime>
      <TitleValue small title="تاریخ و زمان" value={time} />
      <Pricing type="rial" />
      {!owner && <Pricing type="psc" />}
    </Container>
  );
};

export default HistoryItem;
