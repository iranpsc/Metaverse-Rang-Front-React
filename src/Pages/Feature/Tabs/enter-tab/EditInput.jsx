import Rial from "../../../../Components/Rial";
import Psc from "../../../../Components/Psc";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.identityError && props.value === ""
        ? "red"
        : props.theme.colors.newColors.otherColors.inputBorder};
  border: 1px solid
    ${(props) =>
      props.error
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
  step,
  onchange,
  value,
  name,
  identityError,
  error,
  slug,
}) => {
  return (
    <Container error={error} identityError={identityError} value={value}>
      <input
        placeholder={title}
        value={value}
        onChange={onchange}
        type={type || "text"}
        name={name}
        step={step}
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
    </Container>
  );
};

export default EditInput;
