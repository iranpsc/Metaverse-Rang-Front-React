import DynastyTab from './dynasty/DynastyTab';
import PropertyTab from './property-tab/PropertyTab';
import TotalTab from './total-tab/TotalTab';
import TransactionsTab from './transactions-tab/TransactionsTab';
import SuggestionTab from './suggestion-tab/SuggestionTab';

const ProfileInfo = ({active}) => {
    if (active === "total") return <TotalTab />;
    if (active === "property") return <PropertyTab />;
    if (active === "transactions") return <TransactionsTab />;
    if (active === "dynasty") return <DynastyTab />;
    if (active === "suggestion") return <SuggestionTab />;

};

export default ProfileInfo;