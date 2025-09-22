import { useState } from "react";
import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import VodReply from "./VodReply";
import styled from "styled-components";

const Container = styled.div``;
const Messages = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);

  return (
    <Container>
      <CitizenMessage data={data} />
      {data?.responses.map((response) => (
        <AdminMessage key={response.id} data={response} />
      ))}
      {!(data?.status == 5) && (
        <VodReply responseId={data.id} setData={setData} />
      )}
    </Container>
  );
};

export default Messages;
