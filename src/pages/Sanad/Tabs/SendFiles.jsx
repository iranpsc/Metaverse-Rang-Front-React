import React, { useEffect, useRef, useState } from "react";

import nonPhoto from "../../../assets/images/file.png";
import remove from "../../../assets/images/remove.png";
import styled from "styled-components";
import Title from "../../../components/Title";
import { getFieldTranslationByNames } from "../../../services/Utility";

const Files = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Container = styled.div`
  margin-top: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px dashed #454545;
  width: 220px;
  height: 140px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  span {
    color: #a0a0ab;
    font-size: 60px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FilePreview = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
`;

const FileImage = styled.img`
  width: 220px;
  height: 140px;
  border: 1px solid #454545;
  border-radius: 10px;
  object-fit: contain;
  position: relative;
  margin-bottom: 5px;
`;

const RemoveButton = styled.img`
  border: none;
  color: white;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  left: 5px;
  bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin: 10px 0;
`;

const SendFiles = ({ files, onFilesChange }) => {
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE_MB = 9;
  useEffect(() => {
    if (!files || (Array.isArray(files) && files.length === 0)) {
      setPreview("");
      return;
    }

    let objectUrl = "";

    if (files instanceof File) {
      if (files.type.startsWith("image/")) {
        objectUrl = URL.createObjectURL(files);
        setPreview(objectUrl);
      } else {
        setPreview(nonPhoto);
      }
    } else if (typeof files === "string") {
      const isImage = /\.(jpg|jpeg|png|gif)$/i.test(files);
      setPreview(isImage ? files : nonPhoto);
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [files]);

  const fileHandler = (e) => {
    setError("");
    const newFile = e.target.files[0];

    if (newFile) {
      if (newFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(getFieldTranslationByNames("1482"));
      } else {
        onFilesChange(newFile);
      }
    }
  };

  const removeFile = () => {
    onFilesChange([]);
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container>
      <Title title={getFieldTranslationByNames("1328")} />
      <Files>
        {preview && (
          <FilePreview>
            <FileImage src={preview} alt="file-preview" />
            <RemoveButton
              src={remove}
              alt="remove"
              width={36}
              height={36}
              onClick={removeFile}
            />
          </FilePreview>
        )}
        {!preview && (
          <Div onClick={handleDivClick}>
            <span>+</span>
            <HiddenInput
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf,.doc,.docx"
              onChange={fileHandler}
            />
          </Div>
        )}
      </Files>
      {error && <ErrorMessage>{[error]}</ErrorMessage>}
    </Container>
  );
};

export default SendFiles;
