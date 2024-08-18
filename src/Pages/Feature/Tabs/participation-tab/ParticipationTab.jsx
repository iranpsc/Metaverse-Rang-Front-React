import { createContext, useState } from "react";

import ParticipantList from "./ParticipantList";
import Satisfy from "./Satisfy";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  overflow-y: auto;
  height: 68%;
  direction: ltr;
  @media (min-width: 1024px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    height: auto;
    padding-right: 0;
  }
`;

const participants = [
  {
    id: 1,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: 0.58,
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
  {
    id: 2,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: 0.58,
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
  {
    id: 3,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: 0.58,
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
];

export const ParticipantsContext = createContext();
const ParticipationTab = () => {
  const [participantsList, setParticipantsList] = useState(participants);
  return (
    <ParticipantsContext.Provider
      value={{ participantsList, setParticipantsList }}
    >
      <Container>
        <Satisfy />
        <ParticipantList />
      </Container>
    </ParticipantsContext.Provider>
  );
};

export default ParticipationTab;
