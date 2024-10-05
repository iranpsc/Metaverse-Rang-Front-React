import React, { useEffect, useRef, useState } from "react";

import Title from "../Title";
import nonPhoto from "../../assets/images/reports/file.png";
import remove from "../../assets/images/reports/remove.png";
import styled from "styled-components";

const Files = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Container = styled.div`
  margin-top: 10px;
  direction: rtl;
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
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE_MB = 9;

  useEffect(() => {
    const filePreviews = files.map((file) =>
      file.type.startsWith("image/") ? URL.createObjectURL(file) : nonPhoto
    );
    setPreviews(filePreviews);

    return () => {
      filePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [files]);

  const fileHandler = (e) => {
    setError("");

    const newFiles = Array.from(e.target.files);
    let newPreviews = [];
    let isError = false;

    newFiles.forEach((file) => {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`سایز ${file.name} نباید بیشتر از ${MAX_FILE_SIZE_MB} MB باشد.`);
        isError = true;
      } else {
        newPreviews.push(file.type.startsWith("image/") ? URL.createObjectURL(file) : nonPhoto);
      }
    });

    if (!isError) {
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
      onFilesChange([...files, ...newFiles]); 
    }
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setPreviews(updatedPreviews);
    onFilesChange(updatedFiles); // Notify parent of file removal
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container>
      <Title title="ضمینه سند" />
      <Files>
        {previews.map((preview, index) => (
          <FilePreview key={index}>
            <FileImage src={preview} alt={`file-preview-${index}`} />
            <RemoveButton
              src={remove}
              alt="remove"
              width={36}
              height={36}
              onClick={() => removeFile(index)}
            />
          </FilePreview>
        ))}
        {files.length < 5 && (
          <Div onClick={handleDivClick}>
            <span>+</span>
            <HiddenInput
              ref={fileInputRef}
              type="file"
              onChange={fileHandler}
            />
          </Div>
        )}
      </Files>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default SendFiles;
