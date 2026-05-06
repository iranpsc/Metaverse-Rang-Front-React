import RequestsList from "../../../../../components/RequestsList/RequestsList";

const RecieveRequestsList = ({ rows, member, status, setStatus, setMember, type, isLoading }) => {
  return (
    <RequestsList
      rows={rows}
      member={member}
      status={status}
      setStatus={setStatus}
      setMember={setMember}
      type={type}
      isLoading={isLoading}
    />
  );
};

export default RecieveRequestsList;