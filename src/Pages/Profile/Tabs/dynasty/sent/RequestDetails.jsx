import Button from "../../../../../Components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import MemberCard from "./MemberCard";
import Title from "../../../../../Components/Title";
import { convertToPersian } from "../../../../../Services/Utility";
import gift from "../../../../../assets/images/satisfy.png";
import pscGif from "../../../../../assets/gif/psc.gif";
import styled from "styled-components";
import ModalLg from "../../../../../Components/Modal/ModalLg";
import { UserContext } from "../../../../../Services/Reducers/UserContext";
import { useContext } from "react";

const Container = styled.div`
  padding: 20px 0;
  width: 80%;
  height: 80%;
  position: relative;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  overflow-y: auto;
  padding: 20px;
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    h3 {
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-size: 18px;
      font-weight: 400;
    }
    svg {
      color: ${(props) => props.theme.colors.newColors.shades.title};
    }
  }
`;

const Info = styled.div`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    &:nth-of-type(2) {
      color: #c30000;
      margin: 10px 0;
    }
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 20px;
    font-weight: 500;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const Subject = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const Back = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.713);
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const RequestDetails = ({
  setShowDetails,
  status,
  code,
  date,
  time,
  data,
  type,
}) => {
  const [user] = useContext(UserContext);

  return (
    <ModalLg
      setShowModal={setShowDetails}
      titleId={type == "send" ? "113" : "114"}
    >
      <MemberCard status={status} date={date} time={time} code={type =="send" ? user.code:code} name={type== "send" ? user.name :data.from_user.name} image={type == "send" ? user.image :data.user_from?.image} />
    
    </ModalLg>
  );
};

export default RequestDetails;
