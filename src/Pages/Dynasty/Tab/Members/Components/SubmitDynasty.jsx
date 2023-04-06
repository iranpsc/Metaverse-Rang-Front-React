import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerMessage = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SubmitDanasty({ Permission }) {
  return (
    <Container>
      <ContainerMessage></ContainerMessage>
    </Container>
  );
}
