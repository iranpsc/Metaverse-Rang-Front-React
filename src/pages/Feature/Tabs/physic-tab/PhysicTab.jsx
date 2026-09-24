import { GrLocation } from "react-icons/gr";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoLink } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { TbPhoto } from "react-icons/tb";
import { useContext, useEffect, useMemo, useState } from "react";
import { FeatureContext } from "../../Context/FeatureProvider";
import PhysicEdit from "./PhysicEdit";
import PhysicInfo from "./PhysicInfo";

const buildInfoInputs = (info = {}) => ({
  first_row_info: [
    {
      id: 1,
      title: "360",
      value: info.activity_line || "",
      icon: <MdOutlineHome />,
    },
    {
      id: 2,
      title: "361",
      value: info.name || "",
      icon: <HiOutlineBuildingOffice />,
    },
  ],
  second_row_info: [
    {
      id: 1,
      title: "554",
      value: info.address || "",
      icon: <GrLocation />,
    },
  ],
  third_row_info: [
    {
      id: 1,
      title: "555",
      value: info.postal_code || "",
      icon: <TbPhoto />,
    },
    {
      id: 2,
      title: "225",
      value: info.website || "",
      icon: <IoLink />,
    },
  ],
  target: info.description || "",
});

const PhysicTab = ({ owner }) => {
  const [feature] = useContext(FeatureContext);
  const [isEditing, setIsEditing] = useState(false);

  const buildingInfo = useMemo(() => {
    const info = feature?.buildings?.[0]?.building?.information;
    return info ?? {};
  }, [feature]);

  const hasData = useMemo(
    () => Object.values(buildingInfo).some(Boolean),
    [buildingInfo],
  );

  const inputs = useMemo(() => buildInfoInputs(buildingInfo), [buildingInfo]);

  useEffect(() => {
    if (!owner) {
      setIsEditing(false);
      return;
    }

    setIsEditing(!hasData);
  }, [owner, hasData]);

  if (!isEditing) {
    return <PhysicInfo inputs={inputs} setEdit={setIsEditing} edit={owner} />;
  }

  return (
    <PhysicEdit
      setEdit={setIsEditing}
      inputs={inputs}
      hasData={hasData}
      featureID={feature?.id}
      buildingID={feature?.buildings?.[0]?.id}
    />
  );
};

export default PhysicTab;
