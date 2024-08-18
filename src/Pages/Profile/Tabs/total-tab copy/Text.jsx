import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    gap: 8px;
    margin-right: auto;
    align-items: center;
    width: fit-content;
    margin-top: -4px;
    h3 {
      color: #a0a0ab;
      font-size: 13px;
    }
    svg {
      color: #dedee9;
    }
  }
`;
const Info = styled.textarea`
  resize: none;
  color: #dedee9;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid
    ${(props) => (props.value.length === 250 ? "red" : "#dedee9")};
  background-color: #454545;
  border-radius: 5px;
  outline: none;
  width: 95%;
  @media (min-width: 740px) {
    width: 96%;
  }
  @media (min-width: 1400px) {
    width: 96.7%;
  }
`;

const Text = () => {
  const [infoText, setInfoText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setInfoText(text.slice(0, 250));
  };

  return (
    <Container>
      <Info value={infoText} onChange={handleChange} />
      <div>
        <h3>{250 - infoText.length} کاراکتر</h3>
        <span>
          <AiOutlineEdit />
        </span>
      </div>
    </Container>
  );
};

export default Text;
