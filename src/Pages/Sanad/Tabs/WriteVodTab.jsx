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
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../Services/Utility";

import ErrorMessage from "../../../Components/ErrorMessage";
import useRequest from "../../../Services/Hooks/useRequest";

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

const WriteVodTab = () => {
  const { state, dispatch } = useGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const { Request, HTTP_METHOD } = useRequest();
  const [error, setError] = useState("");
  const [errors, setErrors] = useState([]);
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

      const filesData = new FormData();
      state.files.forEach((file, index) => {
        filesData.append(`file${index}`, file, file.name);
      });

      Request(
        "tickets",
        HTTP_METHOD.POST,
        {
          title: state.title,
          subject: state.subject,
          content: state.description,
          attachment: filesData,
        },
        { "Content-Type": "multipart/form-data" }
      )
        .then(() => {
          resetForm();
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        })
        .catch((error) => {
          setError(getFieldTranslationByNames("send-vod", error.message));
          ToastError(error.response.data.message);
        });
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
      <Title
        title={getFieldTranslationByNames("send-vod", "writing the document")}
        right
      />
      {alert && (
        <Alert
          type="success"
          text={`${getFieldTranslationByNames(
            "send-vod",
            "your document titled"
          )} ${state.title} ${getFieldTranslationByNames(
            "send-vod",
            "submitted successfully"
          )}`}
        />
      )}
      <Inputs />
      <Description />
      <SendFiles files={state.files} onFilesChange={handleFilesChange} />

      <Button
        fit
        label={getFieldTranslationByNames("send-vod", "send the document")}
        onclick={sendVod}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ErrorMessage errors={errors} maxList={5} />
    </Container>
  );
};

export default WriteVodTab;
