import styled from "styled-components";
import Psc from "../../../../Components/Psc";
import Rial from "../../../../Components/Rial";

// EditInput Component
const InputContainer = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.hasError
        ? "red"
        : props.theme.colors.newColors.otherColors.inputBorder};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;

  input {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const EditInput = ({
  id,
  icon,
  title,
  type,
  onchange,
  value,
  name,
  identityError,
  error,
  slug,
}) => {
  // Function to handle input validation based on the input type
  const handleInputChange = (e) => {
    let regex;
    if (type === "text") {
      regex = /^[a-zA-Zآ-ی\s]*$/; // Allow only letters and spaces
      if (regex.test(e.target.value)) {
        onchange(e); // Call the parent's onChange handler
      }
    } else if (type === "number") {
      const numericValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      e.target.value = numericValue;
      onchange(e); // Call the parent's onChange handler
    }
  };
  return (
    <InputContainer hasError={identityError}>
      <input
        placeholder={title}
        value={value}
        onChange={handleInputChange} // Use the custom handler here
        type={type || "text"}
        name={name}
      />
      {slug === "psc" ? (
        <Psc color="#DEDEE9" />
      ) : (
        slug === "rial" && <Rial color="#DEDEE9" />
      )}
      {(id === 1) | (id === 2) ? (
        <img width={28} height={28} src={icon} alt={title} />
      ) : (
        ""
      )}
    </InputContainer>
  );
};

export default EditInput;
