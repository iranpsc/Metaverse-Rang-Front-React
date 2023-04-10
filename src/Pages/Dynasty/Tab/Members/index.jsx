import React, { useState } from "react";
import styled from "styled-components";
import DynastySolidImg from "../../../../Assets/images/Dynasty-solid.png";
import Member from "./Components/Member";
import UserSearch from "./Components/SearchBoxMember";
import { useLocation } from "react-router-dom";
const DynastySolid = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${DynastySolidImg});
  background-repeat: no-repeat;
  background-size: 100% 117%;
`;

const membersData = [
  { Left: "33.5%", Top: "11.5%" },
  { Left: "5.4%", Top: "37.3%", Name: "پدر", Relationship: "father" },
  { Left: "21%", Top: "37.3%", Name: "مادر", Relationship: "mother" },
  { Left: "40.2%", Top: "37.3%", Name: "خواهر", Relationship: "sister" },
  { Left: "54.5%", Top: "37.3%", Name: "خواهر", Relationship: "sister" },
  { Left: "69.7%", Top: "37.3%", Name: "برادار", Relationship: "brother" },
  { Left: "86%", Top: "37.3%", Name: "برادار", Relationship: "brother" },
  { Left: "13.5%", Top: "71.5%", Name: "همسر", Relationship: "spouse" },
  { Left: "40%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
  { Left: "54.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
  { Left: "69.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
  { Left: "85.5%", Top: "77%", Name: "فرزند", Relationship: "offspring" },
];
const ConiainerSerchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export default function Members() {
  const Location = useLocation();
  const handleClick = (member) => {
    setIsUserSearchOpen(true);
   Location.state =member
  };
  const handleBack = () => {
    setIsUserSearchOpen(false);
    Location.state=null
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isUserSearchOpen, setIsUserSearchOpen] = useState(false);
  return (
    <>
      {isUserSearchOpen ? (
        <ConiainerSerchBox>
          <UserSearch
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setCurrentUserId={setCurrentUserId}
            handleBack={handleBack}
          />
        </ConiainerSerchBox>
      ) : (
        <DynastySolid>
          {membersData.map((member) => (
            <Member {...member} HandleClick={()=>{handleClick(member)}} />
          ))}
        </DynastySolid>
      )}
    </>
  );
}
