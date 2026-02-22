import { useContext, useEffect, useRef, useState } from "react";
import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";
import { useGlobalState } from "./GlobalVodStateProvider";
import Alert from "../../../components/Alert/Alert";
import Button from "../../../components/Button";
import { AlertContext } from "../../../services/reducers/AlertContext";
import Title from "../../../components/Title";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../services/Utility";

import useRequest from "../../../services/Hooks/useRequest";
import Container from "../../../components/Common/Container";

const WriteVodTab = () => {
  const { state, dispatch } = useGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const { Request, HTTP_METHOD } = useRequest();
  const containerRef = useRef(null);

  const resetForm = () => {
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_TITLE", payload: "" });
    dispatch({ type: "SET_DESCRIPTION", payload: "" });
    dispatch({ type: "SET_FILES", payload: [] });
    dispatch({ type: "SET_SELECTED_CITIZENS", payload: [] });
  };

  const sendVod = () => {
    if (
      state.subject &&
      state.title &&
      state.description &&
      state.files.length > 0
    ) {
      const filesData = new FormData();

      filesData.append("title", state.title);
      filesData.append("content", state.description);
      filesData.append("attachment", state.files[0]);

      if (state.selectedCitizens.length > 0) {
        if (state.selectedCitizens.length === 1) {
          filesData.append("reciever", state.selectedCitizens[0].id);
        } else {
          const citizenIds = state.selectedCitizens.map((citizen) =>
            parseInt(citizen.id)
          );
          filesData.append("reciever", JSON.stringify(citizenIds));
        }
      } else {
        filesData.append("department", state.subject);
      }

      Request("tickets", HTTP_METHOD.POST, filesData, {
        "Content-Type": "multipart/form-data",
      })
        .then(() => {
          if (containerRef.current) {
            containerRef.current.scrollTo(0, 0);
          }
          resetForm();
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        })

        .catch((error) => {

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
      <Title title={getFieldTranslationByNames("1314")} right />
      {alert && (
        <Alert
          type="success"
          text={`${getFieldTranslationByNames("1333")} ${
            state.title
          } ${getFieldTranslationByNames("1334")}`}
        />
      )}
      <Inputs />
      <Description />
      <SendFiles files={state.files} onFilesChange={handleFilesChange} />

      <Button fit label={getFieldTranslationByNames("730")} onclick={sendVod} />
    </Container>
  );
};

export default WriteVodTab;