import React, { useContext, useEffect, useState } from "react";

import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendNote from "./SendNote";

import WriteNoteInput from "./WriteNoteInput";
import styled from "styled-components";
import Title from "../../../../Components/Title";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Button from "../../../../Components/Button";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

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
  text-align: right;
`;

const WriteNote = () => {
  const { alert, setAlert } = useContext(AlertContext);
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  const handleSaveNote = () => {
    if (!title.trim()) {
      setError("عنوان یادداشت نمی‌تواند خالی باشد.");
      return;
    }
    if (!description.trim()) {
      setError("متن یادداشت نمی‌تواند خالی باشد.");
      return;
    }
    setError("");

    const newNote = {
      code: Math.floor(10000 + Math.random() * 90000),
      id: state.notes.length + 1,
      title,
      name: "علی اکبری",
      publish_date: "۲۸ اردیبهشت ۱۴۰۳ | ۱۶:۲۱:۰۸",
      description,
      files,
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });

    setAlert(true);
    setTitle("");
    setDescription("");
    setFiles([]);
  };

  return (
    <Container>
      <Title
        right
        title={getFieldTranslationByNames("send-vod", "write a note")}
      />
      <Subject>
        <Label>{getFieldTranslationByNames("send-vod", "title")}</Label>
        <input
          type="text"
          placeholder={getFieldTranslationByNames("send-vod", "title")}
          value={title}
          onChange={(e) => title.length < 201 && setTitle(e.target.value)}
        />
      </Subject>
      <WriteNoteInput description={description} onChange={setDescription} />
      <SendNote files={files} setFiles={setFiles} />
      <div>
        <Button
          fit
          label={getFieldTranslationByNames("send-vod", "save")}
          onclick={handleSaveNote}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default WriteNote;
