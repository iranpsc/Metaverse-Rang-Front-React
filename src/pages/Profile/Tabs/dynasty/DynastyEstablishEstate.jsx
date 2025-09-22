import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import DynastyEstablish from "./dynasty-establish/DynastyEstablish";
import DynastyEstate from "./dynasty-estate/DynastyEstate";

const DynastyEstablishEstate = ({ mode, setMode }) => {
  const { Request } = useRequest();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await Request("dynasty");

        const prizes = response.data.data.prizes;
        const hasDynasty = response.data.data["user-has-dynasty"];
        if (hasDynasty) {
          setData(response.data.data);
          setMode(2);
        } else {
          const updatedMembers = prizes.map((prize, index) => ({
            id: index + 1,
            name: prize.member,
            psc: prize.psc,
            plus: prize.introduction_profit_increase,
            cage: prize.data_storage,
            rial: prize.accumulated_capital_reserve,
            gif: prize.satisfaction,
          }));
          setData(updatedMembers);
          setMode(1);
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, [setMode]);
  switch (mode) {
    case 1:
      return (
        <DynastyEstablish data={data} setMode={setMode} setData={setData} />
      );
    case 2:
      return <DynastyEstate data={data} />;
    default:
      return null;
  }
};

export default DynastyEstablishEstate;
