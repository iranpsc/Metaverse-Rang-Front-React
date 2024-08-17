import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxLayout } from "react-icons/rx";

import styled from "styled-components";
import TextValueIcon from "../../../../Components/TextValueIcon";

const second_row_info = [
  {
    id: 1,
    title: "تراکم | طبقه",
    value: 12,
    icon: <HiOutlineBuildingOffice />,
  },
  { id: 2, title: "پکیج ساخت", value: 10, icon: <LuPackageOpen /> },
  {
    id: 3,
    title: "مجوز ساخت",
    value: "آزاد",
    icon: <MdOutlinePlaylistAddCheckCircle />,
  },
  { id: 4, title: "متراژ  |  متر مربع", value: 1937, icon: <RxLayout /> },
  { id: 5, title: "سود ساعت شمار", value: 232.44, icon: <RiCloseCircleLine /> },
];

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

const SecondRow = () => {
  return (
    <RowWrapper>
      {second_row_info.map((item) => (
        <TextValueIcon long key={item.id} {...item} />
      ))}
    </RowWrapper>
  );
};

export default SecondRow;
