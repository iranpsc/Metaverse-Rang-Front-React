import { GrLocation } from "react-icons/gr";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoLink } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import PhysicEdit from "./PhysicEdit";
import PhysicInfo from "./PhysicInfo";
import { TbPhoto } from "react-icons/tb";
import { useState, useContext, useEffect, useMemo } from "react";
import { FeatureContext } from "../../Context/FeatureProvider";

const PhysicTab = ({ owner }) => {
  const [feature] = useContext(FeatureContext);
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const info = feature?.buildings[0]?.building?.information;
    setData(info);
    if (feature) {
      const isEmpty = !info || Object.keys(info).length === 0;

      if (isEmpty && owner) {
        setEdit(true);
      } else {
        setEdit(false);
      }
    }
  }, [feature, owner]);

  const rows_inputs = useMemo(
    () => ({
      first_row_info: [
        {
          id: 1,
          title: "360",
          value: data?.activity_line||"",
          icon: <MdOutlineHome />,
        },
        {
          id: 2,
          title: "361",
          value: data?.name || "",
          icon: <HiOutlineBuildingOffice />,
        },
      ],
      second_row_info: [
        {
          id: 1,
          title: "554",
          value: data?.address || "",
          icon: <GrLocation />,
        },
      ],
      third_row_info: [
        {
          id: 1,
          title: "555",
          value: data?.postal_code || "",
          icon: <TbPhoto />,
        },
        {
          id: 2,
          title: "225",
          value: data?.website || "",
          icon: <IoLink />,
        },
      ],
      target: data?.description || "",
    }),
    [data],
  );

  const [inputs, setInputs] = useState(rows_inputs);

  // هر بار که rows_inputs (بر اساس data) تغییر کرد، inputs هم آپدیت بشه
  useEffect(() => {
    setInputs(rows_inputs);
  }, [rows_inputs]);
  const hasData = Boolean(data);
  if (!edit)
    return <PhysicInfo inputs={inputs} setEdit={setEdit} edit={owner} />;
  return (
    <PhysicEdit
      setEdit={setEdit}
      inputs={inputs}
      setInputs={setInputs}
      hasData={hasData}
      featureID={feature?.id}
      buildingID={feature?.buildings?.[0].id}
    />
  );
};

export default PhysicTab;
