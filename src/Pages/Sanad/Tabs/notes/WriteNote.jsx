import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

import SendNote from "./SendNote";
import WriteNoteInput from "./WriteNoteInput";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";

const Subject = styled.div`
  input {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 95.5%;
    font-size: 16px;
    font-weight: 400;
  }
  @media (min-width: 1366px) {
    width: 100%;
  }
`;

const Label = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 20px;
  padding-right: 15px;
  border-radius: 10px;

  @media (min-width: 1366px) {
    height: 600px;
    overflow-y: auto;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const WriteNote = () => {
  const { alert, setAlert } = useContext(AlertContext);
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  const handleSaveNote = () => {
    if (!title.trim() || !description.trim()) {
      setError("عنوان و متن یادداشت نمی‌تواند خالی باشد.");
      return;
    }
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    files.length > 0 && formData.append("attachment", files[0]);

    const headers =
      files.length > 0 ? { "Content-Type": "multipart/form-data" } : {};

    Request("notes", HTTP_METHOD.POST, formData, headers)
      .then((response) => {
        dispatch({ type: "ADD_NOTE", payload: response.data.data });
        setAlert(true);
        resetForm();
      })
      .catch(() => setError("خطا در ارسال یادداشت."));
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setFiles([]);
  };

  return (
    <Container>
      <Title
        right
        title={getFieldTranslationByNames(14922)}
      />
      <Subject>
        <Label>{getFieldTranslationByNames(14929)}</Label>
        <input
          type="text"
          placeholder={getFieldTranslationByNames(14929)}
          value={title}
          onChange={(e) => title.length < 201 && setTitle(e.target.value)}
        />
      </Subject>
      <WriteNoteInput description={description} onChange={setDescription} />
      <SendNote files={files} setFiles={setFiles} />
      <div>
        <Button
          fit
          label={getFieldTranslationByNames(14950)}
          onclick={handleSaveNote}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default WriteNote;
