import ParticipantItem from "./ParticipantItem";

import styled from "styled-components";
import { useContext } from "react";
import Title from "../../../../Components/Title";
import { ParticipantsContext } from "./ParticipationTab";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding-top: 20px;

  @media (min-width: 1500px) {
    padding-right: 15px;
    overflow-y: auto;
    height: 246px !important;
  }
  @media (min-width: 1900px) {
    overflow-y: auto;
    height: 328px !important;
    padding-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ParticipantList = () => {
  const { participantsList } = useContext(ParticipantsContext);
  return (
    <Container>
      <Title
        title={getFieldTranslationByNames(7173)}
      />

      <Wrapper>
        {participantsList
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <ParticipantItem key={item.id} {...item} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default ParticipantList;
