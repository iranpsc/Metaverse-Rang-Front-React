import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubmitDanasty from "./SubmitDynasty";
import GeneralPremission from "./GeneralPremission";
function PremissionDynasty({ User }) {
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
  const [showSubmit, setShowSubmit] = useState(false);
  const [data, setDataPremission] = useState({});
  const onSubmit = () => {
    const data = Object.fromEntries(
      Object.entries(generalSettings).filter(([key]) => !key.includes("id"))
    );
    setDataPremission(data);
    setShowSubmit(true);
  };

  return (
    <>
      {Data.Relationship === "offspring" && User.age < 18 && !showSubmit ? (
        <GeneralPremission
          generalSettings={generalSettings}
          setGeneralSettings={setGeneralSettings}
          onSubmit={onSubmit}
        />
      ) : Data.Relationship === "offspring" && User.age < 18 && showSubmit ? (
        <SubmitDanasty
          Permission={data}
          Relationship={Data.Name}
          RelationshipFamily={Data.Relationship}
          UserData={User}
        />
      ) : (
        <SubmitDanasty
          Permission={data}
          Relationship={Data.Name}
          RelationshipFamily={Data.Relationship}
          UserData={User}
        />
      )}
    </>
  );
}

export default PremissionDynasty;
