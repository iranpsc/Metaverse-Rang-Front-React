import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineHome } from "react-icons/md";

import styled from "styled-components";
import TextValueIcon from "../../../../Components/TextValueIcon";
import { COMBINE_FEATURE } from "../../../../Services/Constants/FeatureType";
import { useContext } from "react";
import { FeatureContext } from "../../Context/FeatureProvider";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr 1fr; */
  gap: 20px;
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }

  @media (max-width: 1024px) and (min-height: 600px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }

  @media (min-width: 1180px) and (max-height: 820px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }
`;

const FirstRow = ({ feature }) => {
  const first_row_info = [
    {
      id: 1,
      title: "شناسه ملک",
      value: feature?.properties?.id,
      icon: <MdOutlineHome />,
    },
    {
      id: 2,
      title: "صاحب ملک",
      value:
        feature?.properties?.owner === "rgb"
          ? "سیستم"
          : feature?.properties?.owner,
      icon: <HiOutlineUser />,
    },
    {
      id: 3,
      title: "وضعیت",
      value: COMBINE_FEATURE[feature?.properties?.rgb],
      icon: <BsCardChecklist />,
    },
  ];
  return (
    <RowWrapper>
      {first_row_info.map((item) => (
        <TextValueIcon key={item.id} {...item} />
      ))}
    </RowWrapper>
  );
};

export default FirstRow;
