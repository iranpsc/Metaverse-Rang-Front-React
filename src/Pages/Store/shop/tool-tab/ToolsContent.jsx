import styled from "styled-components";
import { useContext } from "react";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import InfoRow from "../InfoRow";

const Container = styled.div`
  direction: ltr;
  text-align: right;
  padding: 20px 15px 0 0;
  height: 70% !important;
  overflow-y: auto;
  @media (min-width: 840px) {
    height: 76% !important;
  }
  @media (min-width: 914px) {
    height: 78% !important;
  }
  @media (min-width: 930px) {
    height: 78% !important;
  }
  @media (min-width: 1023px) {
    height: 65%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 20px;
  margin-top: 20px;
`;
const ToolsContent = ({ option, tools }) => {
  const toolContent = tools.find((tool) => tool.id === option);
  const { alert } = useContext(AlertContext);

  return (
    <Container>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد" />}
      <Title title="ابزارها" />
      <Wrapper>
        {toolContent.items.map((item) => (
          <InfoRow shop type="ابزار" key={item.id} data={item} />
        ))}
      </Wrapper>
      ;
    </Container>
  );
};

export default ToolsContent;
