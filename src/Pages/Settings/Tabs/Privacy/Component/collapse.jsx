import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Collapses = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <h3
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        {isOpen ? (
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        )}
        {title}
      </h3>

      <div className={isOpen ? " show " : "content "}>{children}</div>
    </Container>
  );
};
export default Collapses;
