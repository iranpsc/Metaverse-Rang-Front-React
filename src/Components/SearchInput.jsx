import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.newColors.shades.title};
  padding: 5px 12px;
  color: #84858f;
  direction: rtl;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  display: grid;
  align-items: center;
  grid-template-columns: 5px 1fr;
  gap: 50px;
  svg {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
  }
  input {
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    width: 100% !important;
    outline: none;
    border: none;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
  }
`;

const SearchInput = ({ placeholder, value, onchange }) => {
  return (
    <Container>
      <FiSearch size={34} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </Container>
  );
};

export default SearchInput;
