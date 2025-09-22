// Importing required libraries and components
import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DynastySolidImg from "../../../../assets/images/Dynasty-solid.png";
import Member from "./components/Member";
import UserSearch from "./components/SearchBoxMember";
import useRequest from "../../../../services/Hooks/useRequest";

// Styling for background image of component
const DynastySolid = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${DynastySolidImg});
  background-repeat: no-repeat;
  background-size: 100% 117%;
`;

// Styling for search box
const ContainerSearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

// Main functional component
const Members = () => {
  // Using custom hook to fetch data from server
  const { Request } = useRequest();

  // Getting current page location using react-router's useLocation hook
  const location = useLocation();

  // Setting initial states using useState hook
  const [dynastyId, setDynastyId] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isUserSearchOpen, setIsUserSearchOpen] = useState(false);
  const [family, setFamily] = useState([]);

  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const updatedMembersData = [
      { Left: "33.5%", Top: "11.5%", MemberImg: dynastyId["profile-image"] },
      { Left: "5.4%", Top: "37.3%", Name: "پدر", Relationship: "father" },
      { Left: "21%", Top: "37.3%", Name: "مادر", Relationship: "mother" },
      { Left: "40.2%", Top: "37.3%", Name: "خواهر", Relationship: "sister" },
      { Left: "54.5%", Top: "37.3%", Name: "خواهر", Relationship: "sister" },
      { Left: "69.7%", Top: "37.3%", Name: "برادر", Relationship: "brother" },
      { Left: "86%", Top: "37.3%", Name: "برادر", Relationship: "brother" },
      { Left: "13.5%", Top: "71.5%", Name: "همسر", Relationship: "spouse" },
      { Left: "40%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
      { Left: "54.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
      { Left: "69.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
      { Left: "85.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
    ];
    family.forEach(({ profile_photo, relationship, id }) => {
      if (relationship) {
        const index = updatedMembersData.findIndex(
          (member) => member.Relationship === relationship && !member.MemberImg
        );
        if (index !== -1) {
          updatedMembersData[index].id = id;
          updatedMembersData[index].MemberImg = profile_photo;
        }
      }
    });
    setMembersData(updatedMembersData);
  }, [family, dynastyId]);

  // Function to handle click event of each member
  const handleClick = useCallback(
    (member, index) => {
      if (index > 0 && !member.MemberImg) {
        setIsUserSearchOpen(true);
        location.state = member;
      }
    },
    [location]
  );

  // Function to handle go back button event in search box component
  const handleBack = useCallback(() => {
    setIsUserSearchOpen(false);
    location.state = null;
  }, [location]);
  // Function to fetch data from server when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const dynastyResponse = await Request("dynasty");
      setDynastyId(dynastyResponse.data.data);

      if (dynastyResponse.data.data["user-has-dynasty"]) {
        const familyResponse = await Request(
          `dynasty/${dynastyResponse.data.data.id}/family/${dynastyResponse.data.data.family_id}`
        );
        setFamily(familyResponse.data.data);
      }
    };

    fetchData();
  }, []);

  // Returning the JSX structure
  return (
    <>
      {isUserSearchOpen ? (
        <ContainerSearchBox>
          <UserSearch
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setCurrentUserId={setCurrentUserId}
            handleBack={handleBack}
          />
        </ContainerSearchBox>
      ) : (
        <DynastySolid>
          {membersData.map((member, index) => (
            <Member
              key={`${member.Name}_${index}`}
              {...member}
              HandleClick={() => handleClick(member, index)}
            />
          ))}
        </DynastySolid>
      )}
    </>
  );
};

export default memo(Members);
