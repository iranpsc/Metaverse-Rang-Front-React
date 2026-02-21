import { createContext, useState } from "react";
import NoteCard from "./NoteCard";
import NoteMessages from "./NoteMessages";
import styled from "styled-components";
import ModalLg from "../../../../components/Modal/ModalLg";
import Container from "../../../../components/Common/Container";

export const EditContext = createContext();
const NoteDetails = ({ state, setShowDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const data = state.notes[0];
  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      <ModalLg setShowModal={setShowDetails} titleId={1358}>
        <Container>
          <NoteCard data={data} />
          <NoteMessages data={data} />
        </Container>
      </ModalLg>
    </EditContext.Provider>
  );
};

export default NoteDetails;
