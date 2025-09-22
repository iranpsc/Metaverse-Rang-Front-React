import RequestsList from "../../../../../components/RequestsList/RequestsList";

const RecieveRequestsList = ({
  rows,
  member,
  status,
  setStatus,
  setMember,
  setShowDetails,
  type,
}) => {
  return (
    <RequestsList
      rows={rows}
      member={member}
      status={status}
      setStatus={setStatus}
      setMember={setMember}
      setShowDetails={setShowDetails}
      type="receive"
    />
  );
};

export default RecieveRequestsList;
