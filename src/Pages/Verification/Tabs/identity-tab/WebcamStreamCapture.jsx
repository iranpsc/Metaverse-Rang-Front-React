import { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const CircleWebcam = styled(Webcam)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoPreview = styled.video`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WebcamStreamCapture = ({ onRecordClick, capturing }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const timeoutRef = useRef(null);

  const handleStartCaptureClick = useCallback(() => {
    onRecordClick(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();

    timeoutRef.current = setTimeout(() => {
      handleStopCaptureClick();
    }, 30000);
  }, [webcamRef, mediaRecorderRef, onRecordClick]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    mediaRecorderRef.current.stop();
    onRecordClick(false);
  }, [mediaRecorderRef, onRecordClick]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handlePreview = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      return URL.createObjectURL(blob);
    }
    return null;
  }, [recordedChunks]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        webcamRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
      });
  }, []);

  return (
    <>
      {capturing || !handlePreview() ? (
        <CircleWebcam audio={false} ref={webcamRef} />
      ) : (
        <VideoPreview controls src={handlePreview()} />
      )}
      {recordedChunks.length > 0 && !capturing && (
        <>
          <button onClick={handleDownload}>Download</button>
        </>
      )}
    </>
  );
};

export default WebcamStreamCapture;
