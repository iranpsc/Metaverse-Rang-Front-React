import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  outline: none;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
  height: 48px !important;
  padding: 0 10px;
  color: #84858f !important;
  option {
    width: 100%;
    border: transparent !important;
    color: #dedee9;
    background-color: transparent !important;
  }
`;
const EditLevelInput = ({ options, levels }) => {
  const [selectedOption, setSelectedOption] = useState(options[5]);
  const [selectedLevel, setSelectedLevel] = useState(levels[2]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <Wrapper>
      <Select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
      >
        {levels.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default EditLevelInput;
