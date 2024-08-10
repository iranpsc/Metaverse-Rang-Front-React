import styled from "styled-components";

const Container = styled.div`
  direction: ltr;
  overflow-y: auto;
  padding-right: 10px;
  height: 18rem;
  @media (min-width: 850px) {
    height: 19rem;
  }
  @media (min-width: 930px) {
    height: 20rem;
    overflow-y: auto;
  }
  @media (min-width: 1024px) {
    height: 20rem;
  }
  @media (min-width: 1920px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  color: #dedee9;
  width: 100%;
  margin-top: 20px;
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
const SideBar = ({ tools, option, setOption }) => {
  return (
    <Container>
      <Wrapper>
        {tools.map((item) => (
          <Option
            option={option === item.id}
            onClick={() => setOption(item.id)}
            key={item.id}
          >
            بسته
            {item.number
              .toLocaleString()
              .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
            عددی
          </Option>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SideBar;
