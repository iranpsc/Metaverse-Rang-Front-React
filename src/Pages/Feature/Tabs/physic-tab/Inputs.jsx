import styled from "styled-components";
import TextValueIcon from "../../../../Components/TextValueIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: rtl;
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
        {inputs.first_row_info.map((row) => (
          <TextValueIcon
            long
            smallValue
            key={row.id}
            icon={row.icon}
            value={row.value}
            title={row.title}
          />
        ))}
      </First>
      <TextValueIcon
        long
        smallValue
        title={inputs.second_row_info.title}
        value={inputs.second_row_info.value}
        icon={inputs.second_row_info.icon}
      />
      <Third>
        {inputs.third_row_info.map((row) => (
          <TextValueIcon
            key={row.id}
            icon={row.icon}
            value={row.value}
            title={row.title}
          />
        ))}
      </Third>
    </Container>
  );
};

export default Inputs;
