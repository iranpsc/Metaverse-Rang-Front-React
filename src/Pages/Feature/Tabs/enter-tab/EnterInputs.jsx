import { getFieldTranslationByNames } from "../../../../Services/Utility";
import Input from "./Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const EnterInputs = ({ data }) => {
  return (
    <Wrapper>
      {data[0]?.inputs?.slice(0, 4).map((input) => (
        <Input
          {...input}
          title={getFieldTranslationByNames(
            "property-information",
            input.title
          )}
          key={input.id}
        />
      ))}
    </Wrapper>
  );
};

export default EnterInputs;
