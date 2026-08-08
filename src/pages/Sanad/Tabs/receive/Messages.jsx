import { useState } from "react";
import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import VodReply from "./VodReply";
import styled from "styled-components";

const Messages = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  return (
    <>
      <CitizenMessage data={data} />
      {data?.responses.map((response) => (
        <AdminMessage key={response.id} data={response} />
      ))}
      {!(data?.status == 5) && (
        <VodReply responseId={data.id} setData={setData} />
      )}
    </>
  );
};

export default Messages;
