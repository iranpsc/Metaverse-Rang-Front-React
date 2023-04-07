import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubmitDanasty from "./SubmitDynasty";
import GeneralPremission from "./GeneralPremission";
function PremissionDynasty({ Age }) {
  const Location = useLocation();
  const Data = Location.state;
  const [generalSettings, setGeneralSettings] = useState({
    BFR: 0,
    SF: 0,
    W: 0,
    JU: 0,
    DM: 0,
    PIUP: 0,
    PITC: 0,
    PIC: 0,
    ESOO: 0,
    COTB: 0,
  });

  const onSubmit = () => {
    const data = Object.fromEntries(
      Object.entries(generalSettings).filter(([key]) => !key.includes("id"))
    );
  };
  console.log(generalSettings)
  return (
    <>
      {Data.Relationship === "offspring" && Age < 18 ? (
        <GeneralPremission
          generalSettings={generalSettings}
          setGeneralSettings={setGeneralSettings}
          onSubmit={onSubmit}
        />
      ) : (
        <SubmitDanasty Permission={generalSettings} />
      )}
    </>
  );
}

export default PremissionDynasty;
