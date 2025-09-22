import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlueTutorial from "./BlueTutorial";
import CalenderTutorial from "./CalenderTutorial";
import ChallengeTutorial from "./ChallengeTutorial";
import GlobalStatisticsTutorial from "./GlobalStatisticsTutorial";
import IndexTutorial from "./IndexTutorial";
import MesageTutorial from "./MesageTutorial";
import PorofileTutorial from "./PorofileTutorial";
import ProfitTutorial from "./ProfitTutorial";
import PscTutorial from "./PscTutorial";
import RedTutorial from "./RedTutorial";
import ReportTutorial from "./ReportTutorial";
import RialTutorial from "./RialTutorial";
import SatisfactionTutorial from "./SatisfactionTutorial";
import SearchTutorial from "./SearchTutorial";
import StoreTutorial from "./StoreTutorial";
import PingTutorial from "./PingTutorial";
import WatchTutorial from "./WatchTutorial";
import YellowTutorial from "./YellowTutorail";

import "./index.css";
import useAuth from "../../services/Hooks/useAuth";

export default function Tutorial() {
  const { getUser } = useAuth();
  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(null);
  const [finish, setFinish] = useState(false);
  const nextPageHandler = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const local = localStorage.getItem("tutorial");
    if (getUser().id) {
      if (page < tutorialsData.length && !local) {
        setFinish(false);
        setCurrent(tutorialsData[page - 1].component);
      } else {
        localStorage.setItem("tutorial", "true");
        setFinish(true);
      }
    } else {
      setFinish(true);
    }
  }, [page, getUser()]);

  const tutorialsData = [
    { component: <IndexTutorial nextPageHandler={nextPageHandler} /> },
    { component: <PscTutorial nextPageHandler={nextPageHandler} /> },
    { component: <RialTutorial nextPageHandler={nextPageHandler} /> },
    { component: <BlueTutorial nextPageHandler={nextPageHandler} /> },
    { component: <RedTutorial nextPageHandler={nextPageHandler} /> },
    { component: <YellowTutorial nextPageHandler={nextPageHandler} /> },
    { component: <SatisfactionTutorial nextPageHandler={nextPageHandler} /> },
    { component: <CalenderTutorial nextPageHandler={nextPageHandler} /> },
    { component: <StoreTutorial nextPageHandler={nextPageHandler} /> },
    { component: <MesageTutorial nextPageHandler={nextPageHandler} /> },
    { component: <PingTutorial nextPageHandler={nextPageHandler} /> },
    { component: <WatchTutorial nextPageHandler={nextPageHandler} /> },
    { component: <ReportTutorial nextPageHandler={nextPageHandler} /> },
    { component: <ProfitTutorial nextPageHandler={nextPageHandler} /> },
    { component: <PorofileTutorial nextPageHandler={nextPageHandler} /> },
    { component: <ChallengeTutorial nextPageHandler={nextPageHandler} /> },
    { component: <SearchTutorial nextPageHandler={nextPageHandler} /> },
    {
      component: <GlobalStatisticsTutorial nextPageHandler={nextPageHandler} />,
    },
  ];

  return (
    !finish && (
      <div id="tmain" className="main-container-tutoryal">
        <div className="t-container">{current}</div>
      </div>
    )
  );
}
