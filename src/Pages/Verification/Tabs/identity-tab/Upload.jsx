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
  setBankImageURL,
}) => {
  return (
    <Container>
      <VideoRecord
        setVideoError={setVideoError}
        setVideoURLParent={setVideoURLParent}
      />
      <UploadCards
        setNationImageURL={setNationImageURL}
        setBankImageURL={setBankImageURL}
      />
    </Container>
  );
};

export default Upload;
