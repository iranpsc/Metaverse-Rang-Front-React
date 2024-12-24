import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import DynastyEstablish from "./dynasty-establish/DynastyEstablish";
import DynastyEstate from "./dynasty-estate/DynastyEstate";

const DynastyEstablishEstate = ({ mode, setMode }) => {
  const { Request } = useRequest();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await Request("dynasty");
        const prizes = response.data.data.prizes;
        const updatedMembers = prizes.map((prize, index) => ({
          id: index + 1,
          name: prize.member,
          psc: prize.psc,
          plus: prize.introduction_profit_increase,
          cage: prize.data_storage,
          rial: prize.accumulated_capital_reserve,
          gif: prize.satisfaction,
        }));
        setMembers(updatedMembers);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  switch (mode) {
    case 1:
      return <DynastyEstablish members={members} setMode={setMode} />;
    case 2:
      return <DynastyEstate />;
    default:
      return null;
  }
};

export default DynastyEstablishEstate;
