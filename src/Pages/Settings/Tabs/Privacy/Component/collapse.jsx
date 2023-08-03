import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Collapses = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>

      <div className={isOpen ? " show " : "content "}>{children}</div>
    </Container>
  );
};
export default Collapses;
