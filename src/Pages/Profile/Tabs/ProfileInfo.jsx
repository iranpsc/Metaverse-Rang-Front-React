import DynastyTab from './dynasty/DynastyTab';
import PropertyTab from './property-tab/PropertyTab';
import TotalTab from './total-tab/TotalTab';
import TransactionsTab from './transactions-tab/TransactionsTab';

const ProfileInfo = ({active}) => {
    if (active === "total") return <TotalTab />;
    if (active === "property") return <PropertyTab />;
    if (active === "transactions") return <TransactionsTab />;
    if (active === "dynasty") return <DynastyTab />;
};

export default ProfileInfo;