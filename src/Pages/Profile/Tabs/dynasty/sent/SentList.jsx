import RequestList from '../components/RequestList';
import SendRequestsList from './SendRequestsList';

const SentList = () => {
  return (
    <RequestList
      title={113}
      requestType="sent"
      ListComponent={SendRequestsList}
      userField="to_user"
    />
  );
};

export default SentList;