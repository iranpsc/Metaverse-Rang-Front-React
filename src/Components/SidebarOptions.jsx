import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 171px !important;
  background-color: #1a1a18;
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
  color: ${(props) => (props.option ? "#FFC700" : "#dedee9")};
  border-right: ${(props) =>
    props.option ? "2px solid #FFC700" : "2px solid transparent"};
`;

const SidebarOptions = ({ option, setOption, seller }) => {
  return (
    <Wrapper>
      <Option option={option === true} onClick={() => setOption(true)}>
        {seller ? " کف قیمت" : "قیمت فروشنده"}
      </Option>
      <Option option={option === false} onClick={() => setOption(false)}>
        {seller ? "تعیین قیمت" : "قیمت پیشنهادی"}
      </Option>
    </Wrapper>
  );
};

export default SidebarOptions;
