import CitizenMessage from "./CitizenMessage";
import { EditContext } from "./NoteDetails";
import EditNote from "./EditNote";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  direction: ltr;
`;
const NoteMessages = ({ member, id, description, files }) => {
  const { isEditing, setIsEditing } = useContext(EditContext);
  return (
    <Container>
      {!isEditing && (
        <CitizenMessage
          member={member}
          isEditing={isEditing}
          description={description}
          files={files}
        />
      )}
      {/* <AdminMessage /> */}
      {isEditing && (
        <EditNote
          setIsEditing={setIsEditing}
          description={description}
          files={files}
          id={id}
        />
      )}
    </Container>
  );
};

export default NoteMessages;
