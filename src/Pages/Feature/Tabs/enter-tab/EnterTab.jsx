import EnterEdit from "./EnterEdit";
import EnterInfo from "./EnterInfo";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineHome } from "react-icons/md";
import psc from "../../../../Assets/gif/psc.gif";
import rial from "../../../../Assets/gif/rial.gif";
import { useEffect, useState } from "react";
import video1 from "../../../../Assets/gif/rial.gif";
import video2 from "../../../../Assets/gif/rial.gif";

const enterData = [
  {
    id: 1,
    inputs: [
      {
        id: 1,
        title: "entrance fee",
        value: "20",
        slug: "psc",
        type: "number",
        icon: psc,
      },
      {
        id: 2,
        title: "entrance fee",
        value: "300000",
        slug: "rial",
        type: "number",
        icon: rial,
      },
      {
        id: 3,
        title: "rank",
        value: "QA31-10789",
        slug: "level",
        type: "string",
        icon: <HiOutlineBuildingOffice />,
      },
      {
        id: 4,
        title: "level",
        icon: <MdOutlineHome />,
        levels: [
          "same level",
          "other than this level",
          "same level and higher level",
          "the same level and a lower level",
        ],
        options: [
          "citizen",
          "journalist",
          "contributor",
          "developer",
          "inspector",
          "merchant",
          "lawyer",
          "city council members",
          "mayor",
          "governor",
          "minister",
          "judge",
          "legislator",
        ],
      },
      {
        id: 5,
        about:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      },
    ],
    videos: [
      { id: 1, video: video2 },
      { id: 2, video: video1 },
      { id: 3, video: video1 },
      { id: 4, video: video1 },
      { id: 5, video: video1 },
      { id: 6, video: video1 },
    ],
  },
];

const EnterTab = ({ owner }) => {
  const [data, setData] = useState(enterData);
  const [edit, setEdit] = useState(false);
  const [payed, setPayed] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  useEffect(() => {
    if (owner) {
      setPayed(true);
    }
  }, []);
  if (!edit)
    return (
      <EnterInfo
        edit={edit}
        setEdit={setEdit}
        data={data}
        payed={payed}
        setPayed={setPayed}
        isOwner={isOwner}
      />
    );
  if (edit)
    return (
      <EnterEdit
        setEdit={setEdit}
        data={data}
        setData={setData}
        payed={payed}
        setPayed={setPayed}
      />
    );
};

export default EnterTab;
