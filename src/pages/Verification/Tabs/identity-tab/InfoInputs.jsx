import styled from "styled-components";
import TitleValue from "../../../../Components/TitleValue";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;
const Select = styled.select`
  border-radius: 5px;
  border: 1px solid ${(props) => (props.identityError ? "#C30000" : "#454545")};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
  height: 48px;
  padding: 0 10px;
  color: #84858f;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
`;

const InfoInputs = ({ data, inputValues }) => {
  return (
    <Container>
      {Object.values(inputValues).map((item, index) => (
        <TitleValue
          value={item}
          title={getFieldTranslationByNames(data[index]?.label)}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default InfoInputs;
