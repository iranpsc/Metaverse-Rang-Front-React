import MemberCard from "./MemberCard";

import styled from "styled-components";
import { toast } from "react-toastify";

import Button from "../../../../../components/Button";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../../../services/Utility";
import ModalLg from "../../../../../components/Modal/ModalLg";
import OnOff from "../../../../Settings/Tabs/OnOff";
import { useState } from "react";
import useRequest from "../../../../../services/Hooks/useRequest";
import { values } from "lodash";
import { useNavigate } from "react-router-dom";

const settings = [
  { id: 1, label: 836, name: "BFR", value: 0 },
  { id: 2, label: 837, name: "SF", value: 0 },
  { id: 3, label: 838, name: "W", value: 0 },
  { id: 4, label: 839, name: "JU", value: 0 },
  { id: 5, label: 840, name: "PIUP", value: 0 },
  { id: 6, label: 841, name: "PITC", value: 0 },
  { id: 7, label: 138, name: "DM", value: 0 },
  { id: 8, label: 842, name: "PIC", value: 0 },
  { id: 9, label: 843, name: "ESOO", value: 0 },
  { id: 10, label: 844, name: "COTB", value: 0 },
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
  const { Request, HTTP_METHOD } = useRequest();
  const navigate = useNavigate();
  const handleAccept = async () => {
    if (!selectedCitizen || !selectedRelation) return;

    const body = {
      user: selectedCitizen.id,
      relationship: selectedRelation,
    };

    // Add permissions if citizen is under 18
    if (selectedCitizen.age <= 18) {
      body.permissions = settings.reduce((acc, setting) => {
        acc[setting.id] = true; // You might want to track these values in state
        return acc;
      }, {});
    }

    try {
      const response = await Request(
        "dynasty/add/member",
        HTTP_METHOD.POST,
        body
      );

      if (response.status === 201) {
        ToastSuccess("درخواست شما با موفقیت ارسال شد");
        setOpenDetails(false);
        setMode({ mode: 1, type: null });
      }
    } catch (error) {}
  };

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
              {getFieldTranslationByNames(1401)} {memberType}{" "}
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
