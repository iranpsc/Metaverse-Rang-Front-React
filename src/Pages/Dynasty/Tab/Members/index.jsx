import React, { useState, useEffect, useCallback, memo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import DynastySolidImg from "../../../../Assets/images/Dynasty-solid.png";
import Member from "./Components/Member";
import UserSearch from "./Components/SearchBoxMember";
import useRequest from "../../../../Services/Hooks/useRequest";

const DynastySolid = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${DynastySolidImg});
  background-repeat: no-repeat;
  background-size: 100% 117%;
`;

const ContainerSearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Members = () => {
  const { Request } = useRequest();
  const location = useLocation();
  const [dynastyId, setDynastyId] = useState({});
  const membersData = [
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
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isUserSearchOpen, setIsUserSearchOpen] = useState(false);

  const handleClick = useCallback((member, index) => {
    if (index > 0) {
      setIsUserSearchOpen(true);
      location.state = member;
    }
  }, [location]);

  const handleBack = useCallback(() => {
    setIsUserSearchOpen(false);
    location.state = null;
  }, [location]);

  useEffect(() => {
    Request("dynasty").then((response) => {
      setDynastyId(response.data.data);
    });
  }, []);

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
              HandleClick={() => handleClick(member,index)}
            />
          ))}
        </DynastySolid>
      )}
    </>
  );
};

export default memo(Members);
