import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 56px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  padding: 10px 12px;

  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  display: grid;
  align-items: center;
  grid-template-columns: 5px 1fr;
  gap: 50px;
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  input {
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    width: 100% !important;
    outline: none;
    border: none;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    ::placeholder {
      color: ${(props) =>
        props.theme.colors.newColors.otherColors.inputPlaceholder};
    }
  }
`;

const SearchInput = ({ placeholder, value, onchange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(); // Trigger search on Enter key press
    }
  };

  return (
    <Container>
      <FiSearch size={34} onClick={onSearch} style={{ cursor: "pointer" }} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
};

export default SearchInput;
