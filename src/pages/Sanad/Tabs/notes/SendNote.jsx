import { useEffect, useState } from "react";

import nonPhoto from "../../../../assets/images/file.png";
import remove from "../../../../assets/images/remove.png";
import styled from "styled-components";
import Title from "../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const Files = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin-top: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  justify-content: center;
  gap: 10px;
  border: 1px dashed #454545;
  /* width: 205px; */
  margin-right: 5px;
  height: 142px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 60px;
  }
  @media (min-width: 1366px) {
    /* width: 220px; */
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
  /* width: 100%; */
  /* margin-right: 10px; */
  border-radius: 10px;
`;

const FileImage = styled.img`
  /* width: 200px; */
  width: 100%;

  height: 140px;
  border: 1px solid #454545;
  border-radius: 10px;
  object-fit: contain;
  position: relative;
  margin-bottom: 10px;
  @media (min-width: 1366px) {
    /* width: 220px; */
  }
`;

const RemoveButton = styled.img`
  border: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
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

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 15px 0;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SendNote = ({ files, setFiles }) => {
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const filePreviews = files.map((file) =>
      file.type.startsWith("image/") ? URL.createObjectURL(file) : nonPhoto
    );
    setPreviews(filePreviews);

    return () => {
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleDivClick = () => {
    document.getElementById("file-input").click();
  };

  const fileHandler = (event) => {
    const newFiles = Array.from(event.target.files);
    let validFiles = [];
    let sizeExceeded = false;

    newFiles.forEach((file) => {
      if (file.size > 9 * 1024 * 1024) {
        sizeExceeded = true;
      } else {
        validFiles.push(file);
      }
    });

    if (sizeExceeded) {
      setError("حجم فایل نباید بیشتر از 9 مگابایت باشد");
    } else {
      setError("");
      setFiles([...files, ...validFiles]);
    }
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <Container>
      <Title title={getFieldTranslationByNames("1362")} />
      <Wrapper>
        {files.length < 5 && (
          <Div onClick={handleDivClick}>
            <span>+</span>
            <HiddenInput
              id="file-input"
              type="file"
              accept="image/*,video/*,.pdf"
              onChange={fileHandler}
            />
          </Div>
        )}
        {/* <Files> */}
        {previews.map((preview, index) => (
          <FilePreview key={index}>
            <FileImage src={preview} />
            <RemoveButton src={remove} onClick={() => handleRemove(index)} />
          </FilePreview>
        ))}
        {/* </Files> */}
      </Wrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default SendNote;
