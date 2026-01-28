import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useRequest from "../../../../services/Hooks/useRequest";
import DynastyEstablish from "./dynasty-establish/DynastyEstablish";
import DynastyEstate from "./dynasty-estate/DynastyEstate";

const DynastyEstablishEstate = () => {
  const { tab } = useParams();
  const { Request } = useRequest();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await Request("dynasty");
        const prizes = response.data.data.prizes;
        const hasDynasty = response.data.data["user-has-dynasty"];
        localStorage.setItem("dynastyStatus", hasDynasty ? "has" : "no");
        window.dispatchEvent(
          new CustomEvent("dynastyStatusUpdated", {
            detail: hasDynasty ? "has" : "no",
          }),
        );

        if (hasDynasty) {
          setData(response.data.data);
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
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return null;

  if (tab !== "establish" && tab !== "estate") {
    return <Navigate to="/dynasty/establish" replace />;
  }

  if (data && data["user-has-dynasty"] && tab !== "estate") {
    return <Navigate to="/metaverse/profile/dynasty/estate" replace />;
  }

  if (data && !data["user-has-dynasty"] && tab !== "establish") {
    return <Navigate to="/dynasty/establish" replace />;
  }

  return tab === "establish" ? (
    <DynastyEstablish data={data} setData={setData} />
  ) : (
    <DynastyEstate data={data} setData={setData} />
  );
};

export default DynastyEstablishEstate;
