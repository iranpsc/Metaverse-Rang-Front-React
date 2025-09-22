import chat from "../../../../../assets/images/chat.png";
import member from "../../../../../assets/images/user.png";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../../services/Utility";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 10;
  width: 120px;
  position: relative;

  &:not(:first-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) =>
      theme.colors.newColors.otherColors.menuBg};
  }

  h3 {
    color: ${({ theme }) => theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 500;
  }
`;

const Image = styled.div`
  position: relative;
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  &:hover img {
    &:nth-of-type(2) {
      box-shadow: 0px 10px 25px -5px ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Status = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: ${(props) => (props.online ? "#18c08f" : "#808080")};
  position: absolute;
  bottom: 5px;
  right: 10px;
  border: 2px solid #1a1a18;
`;

const Chat = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const TreeMember = ({ item }) => {  
  const relationTypes =[
      { value: "father", label: 125 }, // پدر
      { value: "mother", label: 126 }, 
      { value: "sister", label: 127 }, 
      { value: "brother", label:128 }, 
      { value: "spouse", label:825 }, 
      { value: "offspring ", label: 129}
  ];

  const getRelationshipLabel = (relationship) => {
    const found = relationTypes.find(type => type.value === relationship);
    return found ? getFieldTranslationByNames(found.label) : relationship;
  };

  return (
    <Container>
      <Image>
        <Status online={item.online} />
        <Chat src={chat} width={28} height={28} alt="chat" />
        <img
          src={item.profile_photo || member}
          alt="member"
          width={80}
          height={80}
        />
      </Image>
      <h3>{getRelationshipLabel(item.relationship)}</h3>
      <a href={`https://rgb.irpsc.com/fa/citizen/${item.code}`} target="_blank">
        {item.code}
      </a>
    </Container>
  );
};

export default TreeMember;
