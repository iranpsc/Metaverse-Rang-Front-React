import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";

const User = styled.div`
  a {
    color: #0066ff;
    text-decoration: none;
    font-size: 12px;
  }
  @media (min-width: 998px) {
    a {
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
const UserCode = ({ title, code }) => {
  return (
    <User>
      <Div>
        <HiOutlineUser size={20} />
        <span>{title}</span>
      </Div>
      <a href={`https://rgb.irpsc.com/fa/citizens/${code}`} target="_blank">
        {code}
      </a>
    </User>
  );
};

export default UserCode;
