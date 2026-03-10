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
const SendFiles = ({ files = [], onFilesChange }) => {
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE_MB = 9;

  const fileHandler = (e) => {
    setError("");
    const selectedFiles = Array.from(e.target.files);
    
    // بررسی حجم تک‌تک فایل‌ها
    const invalidFile = selectedFiles.find(f => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    
    if (invalidFile) {
      setError(getFieldTranslationByNames("1643"));
      return;
    }

    // اضافه کردن فایل‌های جدید به لیست قبلی
    onFilesChange([...files, ...selectedFiles]);
    e.target.value = null; // ریست کردن اینپوت برای انتخاب مجدد همان فایل در صورت نیاز
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    onFilesChange(updatedFiles);
  };

  const getPreview = (file) => {
    // اگر فایل از نوع استرینگ باشد (آدرس URL از سمت سرور)
    if (typeof file === "string") return file;
    
    // اگر فایل جدید آپلود شده باشد
    if (file instanceof File && file.type.startsWith("image/")) {
      return URL.createObjectURL(file);
    }
    
    return nonPhoto; // برای فایل‌های غیر عکسی مثل PDF
  };

  return (
    <Container>
      <Title title={getFieldTranslationByNames("1328")} />
      <Files>
        {/* رندر کردن تمام فایل‌ها (قدیمی و جدید) */}
        {files.map((file, index) => (
          <FilePreview key={index}>
            <FileImage src={getPreview(file)} alt={`preview-${index}`} />
            <RemoveButton
              src={remove}
              alt="remove"
              width={36}
              height={36}
              onClick={() => removeFile(index)}
            />
          </FilePreview>
        ))}

        <Div onClick={() => fileInputRef.current.click()}>
          <span>+</span>
          <HiddenInput
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            onChange={fileHandler}
          />
        </Div>
      </Files>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default SendFiles;