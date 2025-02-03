import { AiOutlineExclamationCircle } from "react-icons/ai";
import styled from "styled-components";

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
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
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
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 18px;
    font-weight: 500;
  }
`;

const Details = ({ data }) => {
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
  } = data["dynasty-feature"];

  return (
    <Container>
      <Header>
        <h3>جزییات ملک</h3>
        <span>{propertyId}</span>
      </Header>
      <KeyValue>
        <h3>متراژ</h3>
        <span>{area}</span>
      </KeyValue>
      <KeyValue>
        <h3>تراکم</h3>
        <span>{density}</span>
      </KeyValue>
      <KeyValue>
        <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          افزایش سود از ملک
          <AiOutlineExclamationCircle />
        </h3>
        <span>{profitIncrease}٪</span>
      </KeyValue>
      <KeyValue>
        <h3>تعداد اعضا</h3>
        <span>{membersCount}</span>
      </KeyValue>
      <KeyValue>
        <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          آخرین بروزرسانی <AiOutlineExclamationCircle />
        </h3>
        <span>{lastUpdated}</span>
      </KeyValue>
    </Container>
  );
};

export default Details;
