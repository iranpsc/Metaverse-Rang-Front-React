import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 5px 12px;
  color: #84858f;

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
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
