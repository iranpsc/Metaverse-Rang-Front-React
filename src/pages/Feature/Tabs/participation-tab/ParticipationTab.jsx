import { createContext, useState } from "react";

import ParticipantList from "./ParticipantList";
import Satisfy from "./Satisfy";
import Container from "../../../../components/Common/Container";

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
const ParticipationTab = ({owner}) => {

  const [participantsList, setParticipantsList] = useState(participants);
  return (
    <ParticipantsContext.Provider
      value={{ participantsList, setParticipantsList }}
    >
      <Container>
        <Satisfy isOwner={owner}/>
        <ParticipantList />
      </Container>
    </ParticipantsContext.Provider>
  );
};

export default ParticipationTab;
