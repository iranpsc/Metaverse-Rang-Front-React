import styled from "styled-components";
import { convertToPersian } from "../../../../Services/Utility";

const Container = styled.div`
  direction: ltr;
  overflow-y: auto;
  padding-right: 10px;
  height: 20rem;
  @media (min-width: 850px) {
    height: 18.6rem;
  }
  @media (min-width: 930px) {
    height: 19.5rem;
  }
  @media (min-width: 1023px) {
    max-height: 17.5rem;
  }
  @media (min-width: 1920px) {
    overflow-y: hidden;
  }
`;

const Wrapper = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  color: #dedee9;
  margin-top: 20px;
  width: 100%;
`;

const Option = styled.h2`
  font-weight: 500;
  font-size: 18px;
  padding: 15px 20px;
  white-space: nowrap;
  cursor: pointer;
  direction: rtl;
  color: ${(props) => (props.option ? "#FFC700" : "#dedee9")};
  border-right: ${(props) =>
    props.option ? "2px solid #FFC700" : "2px solid transparent"};
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;
const SideBar = ({ currencies, option, setOption }) => {
  return (
    <Container>
      <Wrapper>
        {currencies.map((item) => (
          <Option
            option={option === item.id}
            onClick={() => setOption(item.id)}
            key={item.id}
          >
            بسته {convertToPersian(item.id)}
          </Option>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SideBar;
