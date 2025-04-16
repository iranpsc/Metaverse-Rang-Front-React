import nonPhoto from "../../../../assets/images/file.png";
import remove from "../../../../assets/images/remove.png";
import styled from "styled-components";
import { useGlobalState } from "../GlobalVodStateProvider";
import { useState } from "react";
import Title from "../../../../Components/Title";

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
  background-color: #000000;
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

const SendFiles = () => {
  const { state, dispatch } = useGlobalState();
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState("");
  console.log(state.files);
  const MAX_FILE_SIZE_MB = 9;

  const fileHandler = (e) => {
    setError("");

    const files = Array.from(e.target.files);
    let filePreviews = [];
    let isError = false;

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(
          `سایز ${file.name} نباید بیشتر از ${MAX_FILE_SIZE_MB} MB باشد.`
        );
        isError = true;
      } else {
        if (file.type.startsWith("image/")) {
          filePreviews.push(URL.createObjectURL(file));
        } else {
          filePreviews.push(nonPhoto);
        }
      }
    });

    if (!isError) {
      setPreviews([...previews, ...filePreviews]);
      dispatch({ type: "SET_FILES", payload: [...state.files, ...files] });
    }
  };

  const removeFile = (index) => {
    const updatedFiles = state.files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setPreviews(updatedPreviews);
    dispatch({ type: "SET_FILES", payload: updatedFiles });
  };

  const handleDivClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <Container>
      <Title title="ضمینه یادداشت" />
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
        {state.files.length < 5 && (
          <Div onClick={handleDivClick}>
            <span>+</span>
            <HiddenInput
              id="file-input"
              type="file"
              onChange={fileHandler}
              multiple
            />
          </Div>
        )}
      </Files>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default SendFiles;
