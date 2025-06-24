import RequestsList from "../../../../../components/RequestsList/RequestsList";

const SendRequestsList = ({ rows, member, status, setStatus, setMember }) => {
  return (
    <RequestsList
      rows={rows}
      member={member}
      status={status}
      setStatus={setStatus}
      setMember={setMember}
      type="send"
    />
  );
};

export default SendRequestsList;
