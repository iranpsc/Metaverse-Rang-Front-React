import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";

const Container = styled.div`
  overflow-y: auto;
  padding-right: 10px;
  padding-bottom: 20px;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.newColors.otherColors.title};
  width: 100%;

  margin-top: 20px;
`;

const Option = styled.h2`
  font-weight: 500;
  font-size: 18px;
  padding: 15px 20px;
  white-space: nowrap;
  cursor: pointer;

  color: ${(props) =>
    props.option
      ? props.theme.colors.primary
      : props.theme.colors.newColors.shades.title};
  border-right: ${(props) =>
    props.option
      ? `2px solid ${props.theme.colors.primary}`
      : "2px solid transparent"};
  @media (max-width: 850px) {
    font-size: 15px;
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
            {getFieldTranslationByNames("504")}
            {convertToPersian(item.number)}
            {getFieldTranslationByNames("505")}
          </Option>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SideBar;
