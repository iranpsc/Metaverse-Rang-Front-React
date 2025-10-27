import { useEffect, useState } from "react";
import useRequest from "../../../../../services/Hooks/useRequest";
import CitizenInvite from "./CitizenInvite";
import FamilyTree from "./FamilyTree";
import LoadingSpinner from "../../../../../components/Common/LoadingSpinner";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden; 
  display: flex;
  flex-direction: column;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 25px;
`;

const DynastyMembers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState({
    parent: [],
    siblings: [],
    spouse: [],
    children: [],
  });
  const [mode, setMode] = useState({ mode: 1, type: null });
  const [family, setFamily] = useState([]);
  const { Request } = useRequest();
  const [citizen, setCitizen] = useState([]);

  const categorizeMembers = (familyData) => {
    const categories = { parent: [], siblings: [], spouse: [], children: [] };
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
        setMode({ mode: 1, type: null });
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
    <Container>
      <ScrollArea>
        {mode.mode === 1 && (
          <FamilyTree
            setMode={setMode}
            members={members}
            ownerImg={family[0]?.profile_photo}
          />
        )}
        {mode.mode === 2 && (
          <CitizenInvite
            setMode={setMode}
            mode={mode}
            memberType={mode.type}
            members={members}
            setMembers={setMembers}
            citizens={citizen}
          />
        )}
      </ScrollArea>
    </Container>
  );
};

export default DynastyMembers;
