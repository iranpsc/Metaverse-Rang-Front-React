import Title from "../../../../../Components/Title";
import List from "./List";

import styled from "styled-components";

const Container = styled.div``;
const Top = styled.div`
  div {
    margin-top: 10px;
    p {
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

const Establish = ({ members }) => {
  return (
    <Container>
      <Top>
        <Title title="تاسیس سلسله" />
        <div>
          <p>با تاسیس سلسله از پاداش و خروجی های فوق العاده بهرمند شوید.</p>
          <p>برای تاسیس سلسله ملک خود را انتخاب کنید.</p>
        </div>
      </Top>
      <List members={members} />
    </Container>
  );
};

export default Establish;
