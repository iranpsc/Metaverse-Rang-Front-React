import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Wrapper = styled.div`
  max-width: 171px !important;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 5px;
  color: #dedee9;
  margin-top: 20px;
`;

const Option = styled.h2`
  font-weight: 500;
  font-size: 18px;
  padding: 10px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) =>
    props.option
      ? props.theme.colors.primary
      : props.theme.colors.newColors.shades.title};
  border-right: ${(props) =>
    props.option
      ? `2px solid ${(props) =>
          props.theme.colors.newColors.otherColors.inputBorder}`
      : "2px solid transparent"};
`;

const SidebarOptions = ({ option, setOption }) => {
  return (
    <Wrapper>
      <Option option={option === true} onClick={() => setOption(true)}>
        {getFieldTranslationByNames("524")}
      </Option>
    </Wrapper>
  );
};

export default SidebarOptions;
