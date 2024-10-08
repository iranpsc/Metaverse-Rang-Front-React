import { useContext, useEffect, useState } from "react";

import EditInput from "../EditInput";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendFiles from "../SendFiles";
import styled from "styled-components";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Button from "../../../../Components/Button";

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const EditNote = ({ setIsEditing, id, description, files }) => {
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [localDescription, setLocalDescription] = useState(description);
  const [localFiles, setLocalFiles] = useState(files);
  useEffect(() => {
    setLocalDescription(description);
    setLocalFiles(files);
  }, [description, files]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  const handleSave = () => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: { id, description: localDescription, files: localFiles }, // Include `id` in the payload
    });

    console.log("Note updated successfully!");
    setIsEditing(false);
  };

  return (
    <Container>
      <EditInput
        description={localDescription}
        onChange={(newDescription) => setLocalDescription(newDescription)}
      />
      <SendFiles
        files={localFiles}
        onFilesChange={(newFiles) => setLocalFiles(newFiles)}
      />

      <Buttons>
        <Button fit label="ذخیره" onclick={handleSave} />
        <Button grayTheme fit label="لغو" onclick={() => setIsEditing(false)} />
      </Buttons>
    </Container>
  );
};

export default EditNote;
