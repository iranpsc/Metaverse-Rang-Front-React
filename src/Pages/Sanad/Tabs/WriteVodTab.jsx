import { useContext, useEffect, useRef, useState } from "react";

import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";

import styled from "styled-components";
import { useGlobalState } from "./GlobalVodStateProvider";
import Alert from "../../../Components/Alert/Alert";
import Button from "../../../Components/Button";
import { AlertContext } from "../../../Services/Reducers/AlertContext";
import Title from "../../../Components/Title";

const Container = styled.div`
  padding: 20px 0;
  height: 220px;
  overflow-y: auto;
  padding-right: 15px;
  @media (min-width: 844px) {
    height: 240px;
  }
  @media (min-width: 880px) {
    height: 190px;
  }
  @media (min-width: 890px) {
    height: 260px;
  }
  @media (min-width: 930px) {
    height: 280px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: right;
`;

const WriteVodTab = () => {
  const { state, dispatch } = useGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  const resetForm = () => {
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_TITLE", payload: "" });
    dispatch({ type: "SET_DESCRIPTION", payload: "" });
    dispatch({ type: "SET_FILES", payload: [] });
  };

  const sendVod = () => {
    if (
      state.subject &&
      state.title &&
      state.description &&
      state.files.length > 0
    ) {
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0);
      }
      setAlert(true);
      setError("");

      setTimeout(() => {
        resetForm();
      }, 2000);

      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      setError("تمامی فیلدها باید قبل از ارسال گزارش پر شوند");
    }
  };

  const handleFilesChange = (files) => {
    dispatch({ type: "SET_FILES", payload: files });
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  return (
    <Container ref={containerRef}>
      <Title title="نوشتن سند" right />
      {alert && (
        <Alert
          type="success"
          text={`گزارش شما با عنوان ${state.title} با موفقیت ارسال شد`}
        />
      )}
      <Inputs />
      <Description />
      <SendFiles files={state.files} onFilesChange={handleFilesChange} />
      <div>
        <Button fit label="ارسال سند" onClick={sendVod} />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default WriteVodTab;
