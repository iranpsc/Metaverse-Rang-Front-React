import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxLayout } from "react-icons/rx";

import styled from "styled-components";
import TextValueIcon from "../../../../Components/TextValueIcon";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (min-width: 1300px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 1024px) and (min-height: 600px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }
  @media (min-width: 1180px) and (max-height: 820px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }
`;

const SecondRow = ({ feature }) => {
  const second_row_info = [
    {
      id: 1,
      title: getFieldTranslationByNames("348"),
      value: feature?.properties?.density,
      icon: <HiOutlineBuildingOffice />,
    },
    {
      id: 2,
      title: getFieldTranslationByNames("350"),
      value: 10,
      icon: <LuPackageOpen />,
    },
    {
      id: 3,
      title: getFieldTranslationByNames("351"),
      value: "آزاد",
      icon: <MdOutlinePlaylistAddCheckCircle />,
    },
    {
      id: 4,
      title: getFieldTranslationByNames("347"),
      value: feature?.properties?.area,
      icon: <RxLayout />,
    },
    {
      id: 5,
      title: getFieldTranslationByNames("349"),
      value: (feature?.properties?.area * feature?.properties?.density) / 100,
      icon: <RiCloseCircleLine />,
    },
  ];

  return (
    <RowWrapper>
      {second_row_info.map((item) => (
        <TextValueIcon long key={item.id} {...item} />
      ))}
    </RowWrapper>
  );
};

export default SecondRow;
