import { HiOutlineCamera, HiOutlineRefresh } from "react-icons/hi";
import styled from "styled-components";
import { useState, useRef } from "react";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
  @media (min-width: 700px) {
    gap: 0;
  }
`;
const Record = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 180px;
  height: 180px;
  border-radius: 100%;
  border: 3px dotted
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  span {
    font-size: 14px;
  }
  video {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 14px;
  font-weight: 400;
  h4 {
    font-size: 16px;
    font-weight: 600 !important;
  }
  p {
    margin: 20px 0 40px 0;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    h3 {
      font-size: 14px;
    }
    h5 {
      color: ${(props) => props.theme.colors.primary};
      span {
        font-weight: 500;
        color: ${(props) => props.theme.colors.newColors.shades.title};
      }
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  cursor: pointer;
  font-size: 24px;
`;
const ContainerRecorder = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
`;
const VideoRecord = () => {
  const [capturing, setCapturing] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);

  const handleRecordClick = () => {
    if (capturing) {
      mediaRecorderRef.current.stop();
      setCapturing(false);
      clearInterval(timerRef.current); // Stop the countdown when recording stops
    } else {
      startRecording();
      setCapturing(true);
    }
  };

  const handleDeleteClick = () => {
    setVideoURL(null);
    setTimeLeft(30);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;
      setError(null);

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });
      let chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        stream.getTracks().forEach((track) => track.stop());
        clearInterval(timerRef.current); // Stop the countdown when recording stops
      };
      mediaRecorderRef.current.start();

      // Start countdown
      let countdown = 30;
      timerRef.current = setInterval(() => {
        countdown -= 1;
        setTimeLeft(countdown);
        if (countdown === 0) {
          mediaRecorderRef.current.stop();
          setCapturing(false);
          clearInterval(timerRef.current);
        }
      }, 1000);
    } catch (err) {
      console.error("Error accessing media devices.", err);
      setError(
        "دسترسی به دوربین یا میکروفون ممکن نیست. لطفاً تنظیمات دستگاه خود را بررسی کنید."
      );
    }
  };

  return (
    <Container>
      <Title>ویدیو احراز هویت</Title>
      <Div>
        <ContainerRecorder>
          <Record onClick={handleRecordClick}>
            {capturing ? (
              <video ref={videoRef} autoPlay muted />
            ) : videoURL ? (
              <video src={videoURL} controls />
            ) : (
              <>
                <HiOutlineCamera size={50} />
                <span>شروع ضبط</span>
              </>
            )}
          </Record>
          {videoURL && (
            <DeleteButton onClick={handleDeleteClick}>
              <HiOutlineRefresh />
            </DeleteButton>
          )}
        </ContainerRecorder>

        <Info>
          <h4>متن احراز هویت، لطفا این متن را در ویدیو بخوانید</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div>
            <h3>زمان خواندن: </h3>
            <h5>
              {timeLeft} <span>ثانیه</span>
            </h5>
          </div>
        </Info>
      </Div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default VideoRecord;
