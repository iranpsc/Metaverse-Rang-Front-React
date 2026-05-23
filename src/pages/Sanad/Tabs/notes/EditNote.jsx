import { useContext, useEffect, useState } from "react";
import {
  getFieldTranslationByNames,
  getPlainText,ToastError,ToastSuccess
} from "../../../../services/Utility";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendFiles from "../SendFiles";
import styled from "styled-components";
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
  const [localDescription, setLocalDescription] = useState(data.content);
  const [localFiles, setLocalFiles] = useState(data.attachments);
  const { Request, HTTP_METHOD } = useRequest();

  const handleSave = () => {
   
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("title", data.title);
    formData.append("content", localDescription);

    if (localFiles && localFiles.length > 0) {
      localFiles.forEach((file) => {
        if (file instanceof File) {
          formData.append("attachments[]", file);
        } else if (typeof file === "string") {
          formData.append("current_attachments[]", file);
        }
      });
    } else {
      formData.append("attachments[]", "");
    }

    Request(`notes/${data.id}`, HTTP_METHOD.POST, formData)
      .then((response) => {
        dispatch({
          type: "UPDATE_NOTE",
          payload: response.data.data,
        });
        setIsEditing(false);
        ToastSuccess(getFieldTranslationByNames(1480));
      })
      .catch((err) => {
        console.error("Update Error:", err);
        ToastError(getFieldTranslationByNames(1646));
      });
  };

  const plainText = getPlainText(localDescription);
  const trimmedText = plainText.trim();
  const isTextValid = trimmedText.length >= 3; 

  return (
    <Container>
      <CustomEditor
        label={getFieldTranslationByNames(460)}
        value={localDescription}
        onChange={(newDescription) => setLocalDescription(newDescription)}
        border={true}
        minLengthLock={true}
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
          disabled={!isTextValid} 
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
