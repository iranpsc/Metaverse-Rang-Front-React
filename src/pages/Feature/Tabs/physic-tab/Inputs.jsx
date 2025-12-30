import styled from "styled-components";
import TextValueIcon from "../../../../components/TextValueIcon";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const First = styled.div`
  display: flex;
  gap: 20px;
`;
const Third = styled.div`
  display: flex;
  gap: 20px;
`;

const Inputs = ({ inputs }) => {
  return (
    <Container>
      <First>
        {inputs.first_row_info
          .filter((row) => row.value !== undefined && row.value !== null && row.value !== "")
          .map((row) => (
            <TextValueIcon
              long
              smallValue
              key={row.id}
              icon={row.icon}
              value={row.value}
              title={getFieldTranslationByNames(row.title)}
            />
          ))}
      </First>

      {inputs.second_row_info.value &&
        <TextValueIcon
          long
          smallValue
          title={getFieldTranslationByNames(inputs.second_row_info.title)}
          value={inputs.second_row_info.value}
          icon={inputs.second_row_info.icon}
        />
      }

      <Third>
        {inputs.third_row_info
          .filter((row) => row.value !== undefined && row.value !== null && row.value !== "")
          .map((row) => (
            <TextValueIcon
              key={row.id}
              icon={row.icon}
              value={row.value}
              title={getFieldTranslationByNames(row.title)}
            />
          ))}
      </Third>
    </Container>
  );
};

export default Inputs;
