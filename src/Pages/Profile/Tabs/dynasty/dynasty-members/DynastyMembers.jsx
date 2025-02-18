import { useEffect, useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import CitizenInvite from "./CitizenInvite";
import FamilyTree from "./FamilyTree";
import LoadingSpinner from "../../../../../Components/Common/LoadingSpinner";
import { use } from "react";

const DynastyMembers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState({
    parent: [],
    siblings: [],
    spouse: [],
    children: [],
  });
  const [mode, setMode] = useState(1);
  const [family, setFamily] = useState([]);
  const { Request } = useRequest();
  const [citizen, setCitizen] = useState([]);
  const categorizeMembers = (familyData) => {
    const categories = {
      parent: [],
      siblings: [],
      spouse: [],
      children: [],
    };

    familyData.forEach((member) => {
      switch (member.relationship) {
        case "father":
        case "mother":
          categories.parent.push(member);
          break;
        case "sister":
        case "brother":
          categories.siblings.push(member);
          break;
        case "spouse":
          categories.spouse.push(member);
          break;
        case "offspring":
          categories.children.push(member);
          break;
      }
    });

    return categories;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const dynastyResponse = await Request("dynasty");

        if (!dynastyResponse.data.data["user-has-dynasty"]) {
          setIsLoading(false);
          return;
        }

        const familyResponse = await Request(
          `dynasty/${dynastyResponse.data.data.id}/family/${dynastyResponse.data.data.family_id}`
        );

        setFamily(familyResponse.data.data);
        setMembers(categorizeMembers(familyResponse.data.data));
        setMode(1);
      } catch (err) {
        setError("Failed to fetch dynasty members");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="large" color="#4a90e2" fullScreen={false} />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      {mode === 1 && (
        <FamilyTree
          setMode={setMode}
          members={members}
          ownerImg={family[0]?.profile_photo}
        />
      )}
      {mode === 2 && (
        <CitizenInvite
          setMode={setMode}
          mode={mode}
          members={members}
          setMembers={setMembers}
          citizens={citizen}
        />
      )}
    </div>
  );
};

export default DynastyMembers;
