import { IoRadioButtonOnOutline } from "react-icons/io5";
import avatar from "../../../../../assets/images/user.png";
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

// Add styled dropdown component
const StyledSelect = styled.select`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  color: ${(props) => props.theme.colors.newColors.otherColors.title};
  border: 1px solid ${(props) => props.theme.colors.newColors.shades.title};
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  width: 50%;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const MemberCard = ({ selectedCitizen, memberType, setSelectedRelation }) => {
  const relationTypes = {
    parent: [
      { value: "father", label: 125 }, // پدر
      { value: "mother", label: 126 }, // مادر
    ],
    siblings: [
      { value: "sister", label: 127 }, // برادر
      { value: "brother", label: 128 }, // خواهر
    ],
    spouse: [
      { value: "spouse", label: 825 }, // همسر
    ],
    children: [
      { value: "son", label: 129 }, // پسر
    ],
  };

  const handleRelationChange = (e) => {
    setSelectedRelation(e.target.value);
  };

  return (
    <Container>
      <Right>
        <IoRadioButtonOnOutline size={24} />
        <Profile>
          <img src={selectedCitizen?.image || avatar} width={80} height={80} />
          <div>
            <h3>{selectedCitizen?.name}</h3>
            <a
              href={`https://rgb.irpsc.com/fa/citizen/${selectedCitizen?.code}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedCitizen?.code}
            </a>
          </div>
        </Profile>
      </Right>
      <Center>
        <h4>{getFieldTranslationByNames(834)}</h4> {/* نسبت */}
        <StyledSelect onChange={handleRelationChange}>
          <option value="">{getFieldTranslationByNames(1000)}</option>
          {relationTypes[memberType]?.map((relation) => (
            <option key={relation.value} value={relation.value}>
              {getFieldTranslationByNames(relation.label)}
            </option>
          ))}
        </StyledSelect>
      </Center>
      <Left>
        <h4>{getFieldTranslationByNames(1400)}</h4> {/* سن */}
        <h3>{convertToPersian(selectedCitizen?.age)} {getFieldTranslationByNames(803)}</h3>
      </Left>
    </Container>
  );
};

export default MemberCard;
