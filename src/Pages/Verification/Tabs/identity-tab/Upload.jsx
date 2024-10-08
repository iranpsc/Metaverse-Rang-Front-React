import UploadCards from "./UploadCards";
import VideoRecord from "./VideoRecord";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 30px;
  align-items: start;
  margin: 20px 0;
  @media (min-width: 1500px) {
    grid-template-columns: 800px 1fr;
  }
`;
const Upload = ({
  setVideoError,
  setVideoURLParent,
  setNationImageURL,
  uploadResponse,
  setUploadResponse,
  inputValues,
  textVerify,
  setTextVerify,
}) => {
  return (
    <Container>
      <VideoRecord
        setVideoError={setVideoError}
        setVideoURLParent={setVideoURLParent}
        uploadResponse={uploadResponse}
        setUploadResponse={setUploadResponse}
        textVerify={textVerify}
        setTextVerify={setTextVerify}
      />
      <UploadCards
        setNationImageURL={setNationImageURL}
        inputValues={inputValues}
      />
    </Container>
  );
};

export default Upload;
