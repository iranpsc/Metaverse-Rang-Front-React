import MemberCard from "./MemberCard";

import styled from "styled-components";
import { toast } from "react-toastify";
import Title from "../../../../../Components/Title";
import Button from "../../../../../Components/Button";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import ModalLg from "../../../../../Components/Modal/ModalLg";

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
  { id: 10, label: 845 },
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
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    &:last-of-type {
      font-weight: 600;
      color: #c30000;
      margin-top: 20px;
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
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: 500;
    color: white;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;
const SpouseSubmit = ({
  setOpenDetails,
  selectedCitizen,
  members,
  setMembers,
  setMode,
  memberType,
}) => {
  const handleAccept = () => {
    if (selectedCitizen) {
      // Determine the role category
      let roleCategory;
      switch (selectedCitizen.role) {
        case "پدر":
        case "مادر":
          roleCategory = "parent";
          break;
        case "برادر":
        case "خواهر":
          roleCategory = "siblings";
          break;
        case "همسر":
          roleCategory = "spouse";
          break;
        case "فرزند":
          roleCategory = "children";
          break;
        default:
          return;
      }

      // Determine if adding is allowed based on constraints
      const isAllowed = (() => {
        switch (roleCategory) {
          case "children":
            return members.children.length < 4;
          case "siblings":
            return members.siblings.length < 4;
          case "spouse":
            return members.spouse.length < 1;
          case "parent":
            return members.parent.length < 2;
          default:
            return false;
        }
      })();

      const category =
        roleCategory === "children"
          ? "فرزندان"
          : roleCategory === "parent"
          ? "والدین"
          : roleCategory === "siblings"
          ? "خواهر و برادر"
          : roleCategory === "spouse"
          ? "همسر"
          : "";
      if (isAllowed) {
        setMembers((prevMembers) => ({
          ...prevMembers,
          [roleCategory]:
            roleCategory === "spouse"
              ? [selectedCitizen] // Replace existing spouse
              : [...prevMembers[roleCategory], selectedCitizen], // Add new member
        }));
        toast.success(
          `${selectedCitizen.name} با موفقیت به ${category} اضافه شد!`
        );
        console.log(`${selectedCitizen.name} added to ${roleCategory}`);
        setMode(1);
      } else {
        toast.error(`بیش از این نمی توانید عضو به ${category} وارد کنید!`);
        console.log(
          `Cannot add ${selectedCitizen.name} to ${roleCategory} due to constraints.`
        );
        setOpenDetails(false);
      }
    }
  };
  return (
    <ModalLg titleId={832} setShowModal={setOpenDetails}>
      <MemberCard selectedCitizen={selectedCitizen} memberType={memberType} />
      <Texts>
        {memberType === "children" ? (
          <Settings>
            {settings.map((setting) => (
              <Wrapper key={setting.id}>
                <p>{getFieldTranslationByNames(setting.label)}</p>
                <OnOff label={setting?.label} />
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
          onclick={handleAccept} // Fixed typo here
          fit
          textColor="#D7FBF0"
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

export default SpouseSubmit;
