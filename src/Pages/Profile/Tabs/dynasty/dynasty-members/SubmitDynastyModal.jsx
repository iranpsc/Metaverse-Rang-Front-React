import MemberCard from "./MemberCard";

import styled from "styled-components";
import { toast } from "react-toastify";

import Button from "../../../../../Components/Button";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import ModalLg from "../../../../../Components/Modal/ModalLg";
import OnOff from "../../../../Settings/Tabs/OnOff";
import { useState } from "react";

const settings = [
  { id: 1, label: 836 },
  { id: 2, label: 837 },
  { id: 3, label: 838 },
  { id: 4, label: 839 },
  { id: 5, label: 840 },
  { id: 6, label: 841 },
  { id: 7, label: 138 },
  { id: 8, label: 842 },
  { id: 9, label: 843 },
  { id: 10, label: 844 },
];

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const Texts = styled.div`
  margin-top: 30px;

  p {
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    font-size: 16px;
    font-weight: 400;
    &:last-of-type {
      font-weight: 600;
      color: ${(props) => props.theme.colors.newColors.otherColors.title};
    }
  }
`;
const Settings = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.otherColors.title};
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;
const SubmitDynastyModal = ({
  setOpenDetails,
  selectedCitizen,
  members,
  setMembers,
  setMode,
  memberType,
}) => {
  const [selectedRelation, setSelectedRelation] = useState("");

  const handleAccept = () => {
    console.log(1);
    if (selectedCitizen && selectedRelation) {
      // Create member object with selected relation
      const memberWithRelation = {
        ...selectedCitizen,
        relation: selectedRelation,
      };

      // Update members based on memberType
      if (members[memberType].length < getMemberTypeLimit(memberType)) {
        setMembers((prev) => ({
          ...prev,
          [memberType]: [...prev[memberType], memberWithRelation],
        }));

        toast.success(
          `${selectedCitizen.name} با موفقیت به ${getTranslatedMemberType(
            memberType
          )} اضافه شد!`
        );
        setMode(1);
      } else {
        toast.error(
          `تعداد اعضای ${getTranslatedMemberType(
            memberType
          )} به حداکثر رسیده است`
        );
      }
      setOpenDetails(false);
    }
  };

  const getMemberTypeLimit = (type) => {
    switch (type) {
      case "children":
        return 4;
      case "siblings":
        return 4;
      case "spouse":
        return 1;
      case "parent":
        return 2;
      default:
        return 0;
    }
  };

  console.log(selectedCitizen.age, memberType);
  return (
    <ModalLg titleId={832} setShowModal={setOpenDetails}>
      <MemberCard
        selectedCitizen={selectedCitizen}
        memberType={memberType}
        setSelectedRelation={setSelectedRelation}
      />
      <Texts>
        {memberType == "children" && selectedCitizen.age < 18 ? (
          <Settings>
            {settings.map((setting) => (
              <Wrapper key={setting.id}>
                <p>{getFieldTranslationByNames(setting.label)}</p>
                <OnOff label={getFieldTranslationByNames(setting.label)} />
              </Wrapper>
            ))}
          </Settings>
        ) : (
          <>
            <p>
              {getFieldTranslationByNames(1401)} {memberType == ""}{" "}
              {getFieldTranslationByNames(1402)} {selectedCitizen.name}{" "}
              {getFieldTranslationByNames(1403)}
            </p>
            <p>{getFieldTranslationByNames(1404)}</p>
          </>
        )}
      </Texts>
      <Buttons>
        <Button
          label={getFieldTranslationByNames(823)}
          color="#18C08F"
          onclick={handleAccept}
          fit
          textColor="#D7FBF0"
          disabled={!selectedRelation} // Button will be disabled when no relation is selected
        />
        <Button
          label={getFieldTranslationByNames(824)}
          color="#C30000"
          onclick={() => setOpenDetails(false)}
          fit
          textColor="#FFFFFF"
        />
      </Buttons>
    </ModalLg>
  );
};

export default SubmitDynastyModal;
