import styled from "styled-components";
import TextValueIcon from "../../../../components/TextValueIcon";
import { getTranslation } from "../../../../services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const First = styled.div`
  display: flex;
  gap: 20px;
    @media (max-width: 1284px) {
    flex-direction: column;
  }
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
          .filter(
            (row) =>
              row.value !== undefined && row.value !== null && row.value !== "",
          )
          .map((row) => (
            <TextValueIcon
              long
              tag={row.id === 1}
              smallValue
              key={row.id}
              icon={row.icon}
              value={row.value}
              title={getTranslation(row.title)}
            />
          ))}
      </First>

      {inputs.second_row_info[0].value && (
        <TextValueIcon
          long
          smallValue
          title={getTranslation(inputs.second_row_info[0].title)}
          value={inputs.second_row_info[0].value}
          icon={inputs.second_row_info[0].icon}
        />
      )}

      <Third>
        {inputs.third_row_info
          .filter(
            (row) =>
              row.value !== undefined && row.value !== null && row.value !== "",
          )
          .map((row) => (
            <TextValueIcon
              key={row.id}
              icon={row.icon}
              value={row.value}
              title={getTranslation(row.title)}
            />
          ))}
      </Third>
    </Container>
  );
};

export default Inputs;
