import { AiOutlineExclamationCircle } from "react-icons/ai";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 20px;
    font-weight: 600;
  }
  span {
    color: ${(props) => props.theme.colors.newColors.otherColors.orange};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const KeyValue = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 500;
    font-size: 18px;

  }
  span {
    color: ${(props) => props.theme.colors.newColors.shades.matn2};
    font-size: 18px;
    font-weight: 500;
    
  }
`;

const Details = ({ data }) => {
  const Navigate = useNavigate();
  if (!data?.["dynasty-feature"]) {
    return null;
  }

  const {
    properties_id: propertyId,
    area,
    density,
    "feature-profit-increase": profitIncrease,
    "family-members-count": membersCount,
    "last-updated": lastUpdated,
    id,
  } = data["dynasty-feature"];

  const renderKeyValue = (labelId, value, icon = false) => (
    <KeyValue>
      <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {getFieldTranslationByNames(labelId)}
        {icon && <AiOutlineExclamationCircle />}
      </h3>
      <span>{value}</span>
    </KeyValue>
  );

  return (
    <Container>
      <Header>
        <h3>{getFieldTranslationByNames(813)}</h3>
        <span onClick={() => Navigate(`/metaverse/feature/${id}`, {
            state: { activePageNumber: 1 , activeTabNavigate: 3 }
          })}>{propertyId}</span>
      </Header>
      {renderKeyValue(373, area)}
      {renderKeyValue(117, density)}
      {renderKeyValue(814, `${profitIncrease}٪`, true)}
      {renderKeyValue(815, membersCount)}
      {renderKeyValue(1368, lastUpdated, true)}
    </Container>
  );
};

export default Details;
