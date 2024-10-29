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

  const containerRef = useRef(null);
  const { Request, HTTP_METHOD } = useRequest();
  const handleSendReply = () => {
    const formData = new FormData();

    formData.append("response", message.replace(/<[^>]+>/g, ""));

    if (files.length > 0 && files[0].file) {
      formData.append("attachment", files[0].file);
    }

    Request(`tickets/response/${responseId}`, HTTP_METHOD.POST, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      const lastResponse =
        res.data.data.responses[res.data.data.responses.length - 1];
      setData((prevData) => ({
        ...prevData,
        responses: Array.isArray(prevData.responses)
          ? [...prevData.responses, lastResponse]
          : [lastResponse],
      }));

      setMessage("");
      setFiles([]);

      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: "smooth",
        });
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
