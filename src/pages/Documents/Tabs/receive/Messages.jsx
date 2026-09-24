import { useState } from "react";
import MessageItem from "./MessageItem";
import VodReply from "./VodReply";

const Messages = ({ data: initialData }) => {
  const [allMessages, setAllMessages] = useState(
    initialData?.messages || []
  );

  if (!initialData) return null;

  return (
    <>
      {allMessages.map((message, index) => (
        <MessageItem
          key={message?.id || `${message?.date}-${message?.time}-${index}`}
          data={message}
          isCurrentUser={message?.is_mine}
        />
      ))}

      {initialData.status !== 5 && (
        <VodReply
          responseId={initialData.id}
          setAllMessages={setAllMessages}
        />
      )}
    </>
  );
};

export default Messages;
