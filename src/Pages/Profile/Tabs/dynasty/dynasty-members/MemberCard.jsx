import { IoRadioButtonOnOutline } from "react-icons/io5";
import avatar from "../../../../../Assets/images/profile.png";
import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../../Services/Utility";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Center = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    margin-top: 4px;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Left = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    margin-top: 4px;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover img {
    box-shadow: 0px 10px 25px -5px #0066ff40;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};

    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    ${(props) => props.theme.colors.primary};

    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    transition: all 0.2s linear;
  }
`;
const MemberCard = ({ selectedCitizen, memberType }) => {
  // Get translated member type
  const getTranslatedMemberType = (type) => {
    switch (type) {
      case "parent":
        return getFieldTranslationByNames(1396); // والدین
      case "spouse":
        return getFieldTranslationByNames(1397); // همسر
      case "siblings":
        return getFieldTranslationByNames(826); // خواهر و برادر
      case "children":
        return getFieldTranslationByNames(827); // فرزندان
      default:
        return type;
    }
  };

  return (
    <Container>
      <Right>
        <IoRadioButtonOnOutline size={24} />
        <Profile>
          <img src={avatar} width={80} height={80} />
          <div>
            <h3>{selectedCitizen?.name}</h3>
            <a
              href={`https://rgb.irpsc.com/fa/citizen/${selectedCitizen?.code}`}
              target="_blank"
            >
              {selectedCitizen?.code}
            </a>
          </div>
        </Profile>
      </Right>
      <Center>
        <h4>نسبت</h4>
        <h3>{getTranslatedMemberType(memberType)}</h3>
      </Center>
      <Left>
        <h4>سن</h4>
        <h3>{convertToPersian(selectedCitizen?.age)} سال</h3>
      </Left>
    </Container>
  );
};

export default MemberCard;
