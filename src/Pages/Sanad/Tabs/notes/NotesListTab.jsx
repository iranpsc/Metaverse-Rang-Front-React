import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import Notes from "./Notes";
import WriteNote from "./WriteNote";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  padding: 20px 0;
  padding-right: 15px;
  display: grid;
  direction: ltr;
  gap: 15px;
  height: 220px;
  overflow-y: auto;
  @media (min-width: 740px) {
    height: 200px;
  }
  @media (min-width: 840px) {
    height: 235px;
  }
  @media (min-width: 880px) {
    height: 185px;
  }
  @media (min-width: 890px) {
    height: 255px;
  }
  @media (min-width: 930px) {
    height: 270px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1180px) {
    height: 580px;
  }
  @media (min-width: 1366px) {
    height: auto;
    grid-template-columns: 2fr 3fr;
    overflow: hidden;
  }
`;

const NotesListTab = () => {
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  return (
    <Container>
      <WriteNote />
      <Notes notes={state.notes} />
    </Container>
  );
};

export default NotesListTab;
