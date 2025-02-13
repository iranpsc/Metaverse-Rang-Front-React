import useRequest from "../../../../../Services/Hooks/useRequest";
import CitizenInvite from "./CitizenInvite";
import FamilyTree from "./FamilyTree";
import { useEffect, useState } from "react";

const tree_members = {
  parent: [
    {
      id: 1,
      name: "آلیس جانسون",
      image: "alice.jpg",
      code: "HM-20000004",
      level: "beginner",
      age: 28,
      role: "مادر",
    },
  ],
  siblings: [],
  spouse: [],
  children: [],
};

const DynastyMembers = () => {
  const [members, setMembers] = useState(tree_members);
  const [citizens, setCitizens] = useState([]);
  const [mode, setMode] = useState(1);
  const { Request } = useRequest();
  const [family, setFamily] = useState([]);
  const [membersData, setMembersData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dynastyResponse = await Request("dynasty");
      setMembersData(dynastyResponse.data.data);
      setMode(1);
      if (dynastyResponse.data.data["user-has-dynasty"]) {
        const familyResponse = await Request(
          `dynasty/${dynastyResponse.data.data.id}/family/${dynastyResponse.data.data.family_id}`
        );
        setFamily(familyResponse.data.data);
        setCitizens(familyResponse.data.data);
        setMode(1);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {mode === 1 && <FamilyTree setMode={setMode} members={members} />}
      {mode === 2 && (
        <CitizenInvite
          setMode={setMode}
          mode={mode}
          citizens={citizens}
          members={members}
          setMembers={setMembers}
        />
      )}
    </div>
  );
};

export default DynastyMembers;
