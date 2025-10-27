import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getFieldTranslationByNames } from "../../services/Utility";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
`;

const DropdownButton = styled.div`
  padding: 10px 12px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.inputBg};
  color: #84858f;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled(MdKeyboardArrowDown)`
  font-size: 20px;
  color: #84858f;
  transition: transform 0.25s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  border: 1px solid #454545;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px 12px;
  color: #84858f;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.shades[80]};
  }
`;

const SearchInput = styled.input`
  width: 92%;
  font-size: 16px;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #454545;
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.inputBg};
  color: #84858f;
  outline: none;
`;
const Dropdown = ({
  options = [],
  selected,
  onSelect,
  placeholder = "please select",
  searchable = false,
  disSelectOption = true, 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const optionsWithPlaceholder = disSelectOption
    ? [placeholder, ...options]
    : options;

  const filteredOptions = searchable
    ? optionsWithPlaceholder.filter((option) =>
        (typeof option === "string" ? option : option.label)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : optionsWithPlaceholder;

  const handleOptionClick = (option) => {
    const value = typeof option === "string" ? option : option.value;
    if (disSelectOption && option === placeholder) {
      onSelect(null);
    } else {
      onSelect(value);
    }
    setIsOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
        <ArrowIcon isOpen={isOpen} />
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {searchable && (
            <SearchInput
              type="text"
              placeholder={getFieldTranslationByNames("57")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}

          {filteredOptions.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {typeof option === "string" ? option : option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
