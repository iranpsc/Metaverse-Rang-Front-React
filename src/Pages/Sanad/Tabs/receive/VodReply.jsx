import { useRef, useState } from "react";

import ReplyInput from "./ReplyInput";
import SendFiles from "./SendFiles";
import styled from "styled-components";
import Button from "../../../../Components/Button";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const VodReply = ({ setData, responseId }) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  console.log(files[0]);
  const containerRef = useRef(null);
  const { Request, HTTP_METHOD } = useRequest();
  const handleSendReply = () => {
    const formData = new FormData();

    const cleanMessage = message.replace(/<[^>]+>/g, "").trim();
    if (!cleanMessage) return;

    formData.append("response", cleanMessage);

    if (files.length > 0 && files[0]?.file instanceof File) {
      formData.append("attachment", files[0].file);
    }

    Request(`tickets/response/${responseId}`, HTTP_METHOD.POST, formData, {
      "Content-Type": "multipart/form-data",
    })
      .then((res) => {
        const newResponse = {
          response: cleanMessage,
          attachment: files[0]?.file,
          created_at: new Date().toISOString(),
        };

        setData((prevData) => ({
          ...prevData,
          responses: Array.isArray(prevData.responses)
            ? [...prevData.responses, newResponse]
            : [newResponse],
        }));

        setMessage("");
        setFiles([]);

        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      })
      .catch((error) => {
        console.error("Failed to send reply:", error);
        if (error.response) {
          console.error("Server response:", error.response.data);
          console.error("Status code:", error.response.status);
        }
      });
  };

  return (
    <Container ref={containerRef}>
      <ReplyInput message={message} setMessage={setMessage} />
      <SendFiles files={files} setFiles={setFiles} />

      <Button
        fit
        label={getFieldTranslationByNames("send-vod", "post a reply")}
        onclick={handleSendReply}
      />
    </Container>
  );
};

export default VodReply;
