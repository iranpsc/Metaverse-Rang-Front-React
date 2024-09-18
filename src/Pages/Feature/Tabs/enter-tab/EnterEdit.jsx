import Title from "../../../../Components/Title";
import EditInputs from "./EditInputs";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  overflow-y: auto;
  direction: ltr;
  height: 69%;
  @media (min-width: 1024px) {
    height: 70%;
  }
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1360px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    height: 82%;
    grid-template-columns: 2fr 3fr;
  }

  @media (min-width: 1920px) {
    height: 80%;
  }
  @media (min-width: 1921px) {
    padding-right: 0;
  }
`;
const EnterEdit = ({ setEdit, data, setData, payed, setPayed }) => {
  return (
    <Container>
      <Title right title="ویرایش اطلاعات" />
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
