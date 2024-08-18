import { AiTwotoneEdit } from "react-icons/ai";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditConfirmModal from "./EditConfirmModal";
import { FiTrash2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import satisfy from "../../../../Assets/images/satisfy.png";
import styled from "styled-components";
import { useState } from "react";
import TitleValue from "../../../Store/shop/TitleValue";
import { convertToPersian } from "../../../../Services/Utility";
import UserCode from "../../../../Components/UserCode";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
  direction: rtl;
`;
const ParticipantSummary = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 10px;
  flex-grow: 1;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1.5fr 1fr 1.2fr 1.2fr 1.2fr;
    gap: 50px;
  }
`;
const ParticipantInfo = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const SatisfyContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
  }
  @media (min-width: 998px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 12px;
    font-weight: 500;
  }
  @media (min-width: 998px) {
    h3 {
      font-size: 14px;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (min-width: 1500px) {
    flex-direction: row;
  }
`;
const Button = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.openOptions
      ? props.theme.colors.primary
      : props.theme.colors.newColors.otherColors.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.newColors.otherColors.iconText};
`;
const Div = styled.div`
  display: flex;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const ParticipantItem = ({ id, time, debt, level, satisfyCount, options }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteParticipant, setDeleteParticipant] = useState(false);
  return (
    <>
      <Container>
        <Div>
          <ParticipantSummary>
            <UserCode title="شناسه کاربر" code="HM-2000081" />
            <TitleValue title="تاریخ و زمان" value={time} />
            <TitleValue title="بدهی مشارکت" value={debt} />
            <TitleValue title="میزان مشارکت" value={level} />
            <SatisfyContainer>
              <Title>
                <h3>رضایت لانچ شده</h3>
                <img src={satisfy} alt="pricing" width={18} height={18} />
              </Title>
              <span>{convertToPersian(satisfyCount)}</span>
            </SatisfyContainer>
          </ParticipantSummary>
          <Buttons>
            <Button onClick={() => setDeleteParticipant(true)}>
              <FiTrash2 />
            </Button>
            <Button onClick={() => setEdit(true)}>
              <AiTwotoneEdit />
            </Button>
            <Button
              openOptions={openOptions}
              onClick={() => setOpenOptions(!openOptions)}
            >
              <IoIosArrowDown
                style={{
                  transform: `${openOptions ? "rotate(180deg)" : "rotate(0)"}`,
                }}
              />
            </Button>
          </Buttons>
        </Div>
        {openOptions && (
          <InfoWrapper>
            {options.map((option) => (
              <ParticipantInfo key={option.id}>
                <TitleValue
                  title="تاریخ و زمان ثبت رضایت"
                  value={option.submit}
                />
                <TitleValue
                  title="تاریخ و زمان تغییر رضایت"
                  value={option.change}
                />
                <SatisfyContainer>
                  <Title>
                    <h3>رضایت لانچ شده</h3>
                    <img src={satisfy} alt="pricing" width={18} height={18} />
                  </Title>
                  <span>{convertToPersian(satisfyCount)}</span>
                </SatisfyContainer>
              </ParticipantInfo>
            ))}
          </InfoWrapper>
        )}
      </Container>
      {edit && <EditConfirmModal id={id} setEdit={setEdit} />}
      {deleteParticipant && (
        <DeleteConfirmModal
          id={id}
          setDeleteParticipant={setDeleteParticipant}
        />
      )}
    </>
  );
};

export default ParticipantItem;
