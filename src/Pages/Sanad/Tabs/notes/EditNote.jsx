import { useContext, useEffect, useState } from "react";

import EditInput from "../EditInput";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendFiles from "../SendFiles";
import styled from "styled-components";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Button from "../../../../Components/Button";
import useRequest from "../../../../Services/Hooks/useRequest";

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

const EditNote = ({ setIsEditing, data }) => {
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [localDescription, setLocalDescription] = useState(data.content);
  const [localFiles, setLocalFiles] = useState(data.attachment);

  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    setLocalFiles(data.attachment);
  }, [localFiles]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("content", localDescription);
    if (localFiles) {
      formData.append("attachment", localFiles);
    }

    const headers = localFiles ? { "Content-Type": "multipart/form-data" } : {};

    Request(`notes/${data.id}`, HTTP_METHOD.PUT, formData, headers)
      .then((response) => {
        dispatch({
          type: "UPDATE_NOTE",
          payload: response.data.data,
        });
        setAlert(true);
        setIsEditing(false);
      })
      .catch(() => setAlert("خطا در به‌روزرسانی یادداشت."));
  };

  return (
    <Container>
      <EditInput
        description={localDescription}
        onChange={(newDescription) => setLocalDescription(newDescription)}
      />
      <SendFiles
        fileUrl={localFiles}
        onFileChange={(newFiles) => setLocalFiles(newFiles)}
      />

      <Buttons>
        <Button
          fit
          label={getFieldTranslationByNames(14950)}
          onclick={handleSave}
        />
        <Button
          grayTheme
          fit
          label={getFieldTranslationByNames("send-vod", "cancel")}
          onclick={() => setIsEditing(false)}
        />
      </Buttons>
    </Container>
  );
};

export default EditNote;
