import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import Notes from "./Notes";
import WriteNote from "./WriteNote";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import useRequest from "../../../../services/Hooks/useRequest";

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  gap: 15px;
  overflow-y: auto;
  height: auto;
  flex-direction: column;
  @media (min-width: 1366px) {
    overflow: auto;
    flex-direction: row;
  }
`;

const NotesListTab = () => {
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const { Request } = useRequest(); // Assuming `useRequest` is your custom hook for API calls

  useEffect(() => {
    // Fetch notes data from the API when the component loads (on mount)
    const fetchNotes = async () => {
      try {
        const response = await Request("notes");
        const fetchedNotes = response.data.data;

        // Dispatch ADD_NOTE for each fetched note
        fetchedNotes.forEach((note) => {
          dispatch({ type: "ADD_NOTE", payload: note });
        });
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes(); // Call the function on component mount
  }, []);
  return (
    <Container>
      <WriteNote />
      <Notes notes={state.notes} />
    </Container>
  );
};

export default NotesListTab;
