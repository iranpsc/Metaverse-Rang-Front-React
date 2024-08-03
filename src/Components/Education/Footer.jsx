import { BiDislike, BiLike } from "react-icons/bi";

import { FaRegComment } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

import styled from "styled-components";
import { convertToPersian } from "../../Services/Utility";

const actions = [
  { id: 1, icon: <FaRegComment />, value: "42" },
  { id: 2, icon: <BiLike />, value: "125" },
  { id: 3, icon: <BiDislike />, value: "10" },
  { id: 4, icon: <IoEyeOutline />, value: "607" },
];
const Left = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    h3 {
      font-weight: 500;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #969696;
  border-top: 1px solid #2d2d2a;
  padding-top: 5px;
  svg {
    font-size: 18px;
  }
  span {
    font-size: 19px;
    font-weight: 500;
    padding-top: 2px;
  }
  @media (max-width: 1400px) {
    display: ${(props) => (props.show ? "none" : "flex")};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  a {
    cursor: pointer;
    color: #007bff;
    font-size: 19px;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Footer = ({ show }) => {
  return (
    <Container show={show}>
      <Right>
        <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">HM-2000003</a>
        <span>
          <TfiWrite />
        </span>
      </Right>
      <Left>
        {actions.map((item) => (
          <div key={item.id}>
            <h3>{convertToPersian(item.value)} </h3>
            <span>{item.icon}</span>
          </div>
        ))}
      </Left>
    </Container>
  );
};

export default Footer;
