import styled from "styled-components";
import TitleValue from "../../../../components/TitleValue";
import { getTranslation } from "../../../../services/Utility";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;
/*
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
*/
const identityInfoFields = [
  { id: 1, slug: "fname", label: "647" },
  { id: 2, slug: "lname", label: "646" },
  { id: 3, slug: "melli_code", label: "870" },
  { id: 4, slug: "province", label: "59" },
  { id: 5, slug: "birthdate", label: "83" },
  { id: 6, slug: "gender", label: "872" },
];

const InfoInputs = ({ kyc = {} }) => {
  return (
    <Container>
      {identityInfoFields.map((field) => (
        <TitleValue
          value={kyc?.[field.slug] || ""}
          title={getTranslation(field.label)}
          key={field.id}
        />
      ))}
    </Container>
  );
};

export default InfoInputs;
