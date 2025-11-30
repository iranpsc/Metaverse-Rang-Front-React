import React, { useContext, useRef, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import Alert from "../../../../components/Alert/Alert";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import Button from "../../../../components/Button";
import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";
import Title from "../../../../components/Title";
import styled from "styled-components";
import { useReportsGlobalState } from "../GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import { useLocation } from "react-router-dom";
import Container from "../../../../components/Common/Container";
import ErrorMessage from "../../../../components/ErrorMessage";

const StyledContent = styled.div`
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

const ErrorReportTab = ({ title, subdomain }) => {
  const location = useLocation();

  const { Request, HTTP_METHOD } = useRequest();
  const { state, dispatch } = useReportsGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const [error, setError] = useState("");
  const containerRef = useRef(null);
  const baseURL = location.state?.href
    ? `https://rgb.irpsc.com/${location.state.href}`
    : "https://rgb.irpsc.com/metaverse/report";

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
        url: baseURL,
      };

      const attachments = state.files.map((file) => {
        return file;
      });

      if (attachments.length > 5) {
        setError("The attachment must not have more than 5 items.");
        return;
      }

      try {
        await Request(
          "reports",
          HTTP_METHOD.POST,
          { ...formData, attachments: attachments },
          { "Content-Type": "multipart/form-data" }
        );

        setAlert(true);
        setError("");
        if (containerRef.current) {
          containerRef.current.scrollTo(0, 0);
        }
        setTimeout(() => {
          resetForm();
          setAlert(false);
        }, 3000);
      } catch (error) {
        console.error("❌ Report submission failed:", error);

        setError(getFieldTranslationByNames("1387"));
      }
    }
  };
  return (
    <Container ref={containerRef}>
      {alert && (
        <Alert type="success" text={getFieldTranslationByNames("461")} />
      )}
      <StyledContent>
        <Title title={getFieldTranslationByNames("1386")} right />
        <p>
          {getFieldTranslationByNames("1376")} <span>{title}</span>{" "}
          {getFieldTranslationByNames("1377")} <span>{subdomain}</span>{" "}
        </p>
        <Inputs />
        <Description />
        <SendFiles />
        <div>
          <Button
            fit
            label={getFieldTranslationByNames("193")}
            onclick={sendReport}
          />
        </div>
        <ErrorMessage
          errors={[error]}
          maxList={5}
          containerRef={containerRef}
          onClear={() => setError("")}
        />
      </StyledContent>
    </Container>
  );
};

export default ErrorReportTab;
