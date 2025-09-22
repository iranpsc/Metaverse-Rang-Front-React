import CitizenMessage from "./CitizenMessage";
import { EditContext } from "./NoteDetails";
import EditNote from "./EditNote";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div``;
const NoteMessages = ({ data }) => {
  const { isEditing, setIsEditing } = useContext(EditContext);
  return (
    <Container>
      {!isEditing && <CitizenMessage data={data} />}
      {isEditing && <EditNote setIsEditing={setIsEditing} data={data} />}
    </Container>
  );
};

export default NoteMessages;
