import React, { useContext, useRef, useState } from "react";
import useRequest from '../../../../Services/Hooks/useRequest';
import Alert from "../../../../Components/Alert/Alert";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Button from "../../../../Components/Button";
import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";
import Title from "../../../../Components/Title";
import styled from "styled-components";
import { useReportsGlobalState } from "../GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility/index";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px 0;
  height: 100%;
  overflow-y: auto;
  padding-right: 15px;
 
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 600;
      color: ${(props) => props.theme.colors.newColors.shades.title};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const ErrorReportTab = ({ title, subdomain }) => {
  const location = useLocation();

  const { Request, HTTP_METHOD } = useRequest();
  const { state, dispatch } = useReportsGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const [error, setError] = useState("");
  const containerRef = useRef(null);
  const baseURL = location.state?.href ? `https://rgb.irpsc.com/${location.state.href}` : "https://rgb.irpsc.com/metaverse/report";

  const resetForm = () => {
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_TITLE", payload: "" });
    dispatch({ type: "SET_DESCRIPTION", payload: "" });
    dispatch({ type: "SET_FILES", payload: [] });
  };

  const sendReport = async () => {
    if (
      state.subject &&
      state.title &&
      state.description &&
      state.files.length > 0
    ) {
      const formData = {
        title: state.title,
        content: state.description,
        subject: state.subject,
        url: baseURL
      };
  
      const attachments = state.files.map(file => {
        return file;  
      });
  
      if (attachments.length > 5) {
        setError("The attachment must not have more than 5 items.");
        return;
      }
  
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0); 
      }
  
      try {
        console.log("send data is", { ...formData, attachments: attachments });
        await Request('reports', HTTP_METHOD.POST, { ...formData, attachments: attachments }, { "Content-Type": "multipart/form-data" });
        setAlert(true);
        setError("");
  
        setTimeout(() => {
          resetForm();
          setAlert(false);
        }, 3000);
      } catch (error) {
        setError(getFieldTranslationByNames("misc", "an error occurred"));
      }
    } else {
      setError(getFieldTranslationByNames("report", "all fields must be filled before sending the report"));
    }
  };
  
  
  return (
    <Container ref={containerRef}>
      <Title title={getFieldTranslationByNames("report", "error report")} right />
      <p>
      {getFieldTranslationByNames("report", "write your report from page")}{" "}<span>{title}</span>{" "}{getFieldTranslationByNames("report", "section")} <span>{subdomain}</span>{" "}
      </p>
      {alert && (
        <Alert
          type="success"
          text={getFieldTranslationByNames("training", "your report has been registered and will be reviewed as soon")}
        />
      )}
      <Inputs />
      <Description />
      <SendFiles />
      <div>
        <Button fit label={getFieldTranslationByNames("training", "submit report")} onclick={sendReport} />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ErrorReportTab;
