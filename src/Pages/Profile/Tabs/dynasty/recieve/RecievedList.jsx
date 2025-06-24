import RequestList from '../components/RequestList';
import RecieveRequestsList from './RecieveRequestsList';

const RecievedList = ({ setShowDetails }) => {
  return (
    <RequestList
      title={114}
      requestType="recieved"
      ListComponent={RecieveRequestsList}
      userField="from_user"
    />
  );
};

export default RecievedList;
