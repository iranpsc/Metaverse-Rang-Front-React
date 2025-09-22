import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import Notes from "./Notes";
import WriteNote from "./WriteNote";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";

const Container = styled.div`
  padding: 20px 0;
  padding-right: 15px;
  display: grid;

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
