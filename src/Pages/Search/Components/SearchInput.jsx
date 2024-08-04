import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 56px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 10px 12px;
  color: #84858f;
  direction: rtl;
  background-color: #2c2c2c;
  display: grid;
  align-items: center;
  grid-template-columns: 5px 1fr;
  gap: 50px;
  svg {
    color: white;
  }
  input {
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    width: 100% !important;
    outline: none;
    border: none;
    color: white;
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
