import { useContext, useEffect, useState } from "react";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendFiles from "../SendFiles";
import styled from "styled-components";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import Button from "../../../../components/Button";
import useRequest from "../../../../services/Hooks/useRequest";
import CustomEditor from "../../../../components/Common/CustomEditor";
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
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);
  const handleSave = () => {
    const formData = new FormData();

    formData.append("_method", "PUT");
    formData.append("content", localDescription);
    formData.append("title", data.title);

    if (localFiles instanceof File) {
      formData.append("attachment", localFiles);
    } else if (!localFiles) {
      formData.append("attachment", "");
    }

    Request(`notes/${data.id}`, HTTP_METHOD.POST, formData, {})
      .then((response) => {
        dispatch({
          type: "UPDATE_NOTE",
          payload: response.data.data,
        });
        setIsEditing(false);
      })
      .catch(() => setAlert("خطا در به‌روزرسانی یادداشت."));
  };
  return (
    <Container>
      <CustomEditor
        label={getFieldTranslationByNames(460)}
        value={localDescription}
        onChange={(newDescription) => setLocalDescription(newDescription)}
        border={true}
      />
      <SendFiles
        files={localFiles}
        onFilesChange={(newFiles) => setLocalFiles(newFiles)}
      />

      <Buttons>
        <Button
          fit
          label={getFieldTranslationByNames("629")}
          onclick={handleSave}
        />
        <Button
          grayTheme
          fit
          label={getFieldTranslationByNames("833")}
          onclick={() => setIsEditing(false)}
        />
      </Buttons>
    </Container>
  );
};

export default EditNote;
