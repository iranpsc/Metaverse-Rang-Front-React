import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import Notes from "./Notes";
import WriteNote from "./WriteNote";
import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import { useScrollDirection } from "../../../../hooks/useScrollDirection";
import { useScrollDirectionContext } from "../../../../services/reducers/ScrollDirectionContext";

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  gap: 15px;
  overflow-y: auto;
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const NotesListTab = () => {
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const { Request } = useRequest();
  const { updateScrollDirection } = useScrollDirectionContext();

  const ref = useRef(null);
  const isScrollingDown = useScrollDirection(ref);

  useEffect(() => {
    updateScrollDirection(isScrollingDown);
  }, [isScrollingDown, updateScrollDirection]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await Request("notes");
        const fetchedNotes = response.data.data;
        fetchedNotes.forEach((note) =>
          dispatch({ type: "ADD_NOTE", payload: note })
        );
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <Container ref={ref}>
      <WriteNote />
      <Notes notes={state.notes} />
    </Container>
  );
};

export default NotesListTab;
