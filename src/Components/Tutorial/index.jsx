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

import './index.css';
import useAuth from "../../Services/Hooks/useAuth";

export default function Tutorial() {
  const { getUser } = useAuth();
  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(<></>);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("tutorial");

    if (getUser().id) {
      if (page < 19 && !local) {
        setFinish(false);
        switch (page) {
          case 1:
            setCurrent(<IndexTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 2:
            setCurrent(<PscTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 3:
            setCurrent(<RialTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 4:
            setCurrent(<BlueTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 5:
            setCurrent(<RedTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 6:
            setCurrent(<YellowTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 7:
            setCurrent(
              <SatisfactionTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 8:
            setCurrent(<CalenderTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 9:
            setCurrent(<StoreTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 10:
            setCurrent(<MesageTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 11:
            setCurrent(<PingTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 12:
            setCurrent(<WatchTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 13:
            setCurrent(<ReportTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 14:
            setCurrent(<ProfitTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 15:
            setCurrent(<PorofileTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 16:
            setCurrent(<ChallengeTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 17:
            setCurrent(<SearchTutorial nextPageHandler={nextPageHandler} />);
            break;

          case 18:
            setCurrent(<GlobalStatisticsTutorial nextPageHandler={nextPageHandler} />);
            break;

        

          default:
            break;
        }
      } else {
        localStorage.setItem("tutorial", "true");
        setFinish(true);
      }
    } else {
      setFinish(true);
    }
 
  }, [page, getUser]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  return (
    !finish && (
      <div id="tmain" className="main-container-tutoryal">
        <div className="t-container">{current}</div>
      </div>
    )
  );
}
