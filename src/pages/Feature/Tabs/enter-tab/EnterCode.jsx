import styled from "styled-components";
import Input from "../physic-tab/Input";
import Button from "../../../../components/Button";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 30px;
  gap: 20px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const ButtonEdit = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.blue ? "#18C08F" : "#E9E9E9")};
  color: ${(props) => (props.blue ? "#FFFFFF" : "#949494")} !important;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  @media (min-width: 998px) {
    height: 50px;
  }
`;
const EnterCode = ({ setPayStatus }) => {
  return (
    <Container>
      <Input
        placeholder={getFieldTranslationByNames("535")}
        onchange={() => {}}
      />
      <Div>
        <Button
          fit
          label={getFieldTranslationByNames("536")}
          onclick={() => setPayStatus(true)}
        />
       
      </Div>
    </Container>
  );
};

export default EnterCode;
