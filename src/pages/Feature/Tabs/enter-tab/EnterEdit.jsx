import Title from "../../../../components/Title";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import EditInputs from "./EditInputs";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px 0;
  padding-right: 15px;
  overflow-y: auto;
  
`;
const EnterEdit = ({ setEdit, data, setData, payed, setPayed }) => {
  return (
    <Container>
      <Title
        title={getFieldTranslationByNames(
          "entering-the-property",
          "editing information"
        )}
      />
      <EditInputs
        data={data}
        setData={setData}
        setEdit={setEdit}
        setPayed={setPayed}
      />
    </Container>
  );
};

export default EnterEdit;
