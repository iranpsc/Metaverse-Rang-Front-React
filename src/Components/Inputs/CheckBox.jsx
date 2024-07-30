import shortid from "shortid";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 1%;
  @media (min-width: 1024px) {
    margin-top: 5%;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  text-align: right;
  font-family: AzarMehr !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`;

function CheckBox({ value, onClickHandler, text }) {
  const id = shortid.generate();

  return (
    <Container>
      <Input
        type="checkbox"
        id={id}
        value={value}
        onClick={() => onClickHandler(!value)}
      />
      <Label htmlhtmlFor={id}>{text}</Label>
    </Container>
  );
}

export default CheckBox;
