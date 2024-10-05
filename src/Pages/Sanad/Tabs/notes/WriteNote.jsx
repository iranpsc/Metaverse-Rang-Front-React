import React, { useContext, useEffect, useState } from "react";

import { AlertContext } from "../../../App";
import Button from "../../Button";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import SendNote from "./SendNote";
import Title from "../../Title";
import WriteNoteInput from "./WriteNoteInput";
import styled from "styled-components";

const Subject = styled.div`
  direction: rtl;
  input {
    background-color: #2c2c2c;
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 95.5%;
    font-size: 16px;
    font-weight: 400;
  }
  @media (min-width: 1366px) {
    width: 100%;
  }
`;

const Label = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const Container = styled.div`
  background-color: #1a1a18;
  padding: 20px;
  padding-right: 15px;
  border-radius: 10px;
  direction: ltr;
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
      <Title right title="نوشتن یادداشت" />
      <Subject>
        <Label>عنوان</Label>
        <input
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={(e) => title.length < 201 && setTitle(e.target.value)}
        />
      </Subject>
      <WriteNoteInput description={description} onChange={setDescription} />
      <SendNote files={files} setFiles={setFiles} />
      <div dir="rtl">
        <Button fit label="ذخیره" onclick={handleSaveNote} />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default WriteNote;
