import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GiftImage from "../../assets/images/gift-box.png";
import SearchImage from "../../assets/images/search.png";
import StatisticsImage from "../../assets/images/statistics.png";
import DynastyImage from "../../assets/images/dynsty.png";
import ToolTip from "../Tooltip";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35%;
  left: 8px;
  z-index: 500;
  gap: 32px;
`;

const Icon = styled.img`
  width: 56px;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
`;
const IconEnable = styled.img`
  width: 56px;
  cursor: pointer;
`;

export default function LeftIcon() {
  const navigate = useNavigate();
  return (
    <Container>
      <ToolTip
        Chidren={<Icon src={GiftImage} />}
        TitleToltip={"چالش ها"}
        ContentToltip={"جوایز متعدد در VOD مختلف متناسب با رده های سنی"}
        classNamePosstion={"tw-lefticon"}
      />

      <ToolTip
        Chidren={
          <IconEnable
            onClick={() => navigate("/metaverse/search")}
            src={SearchImage}
          />
        }
        TitleToltip={"جستجوی مرکزی"}
        ContentToltip={"جستجو در VOD و بخش های متارنگ"}
        classNamePosstion={"tw-lefticon"}
      />

      <ToolTip
        Chidren={<Icon src={StatisticsImage} />}
        TitleToltip={"آمار سراسری"}
        ContentToltip={"لیست شهروندان متارنگ طبقه بندی شده بر اساس ویژگی"}
        classNamePosstion={"tw-lefticon"}
      />
      <ToolTip
        Chidren={
          <Icon
            src={DynastyImage}
            onClick={() => navigate("/metaverse/dynasty")}
            style={{ filter: "none", cursor: "pointer" }}
          />
        }
        TitleToltip={"سلسله"}
        ContentToltip={"ساخت سلسله خانوادگی"}
        classNamePosstion={"tw-lefticon"}
      />
    </Container>
  );
}
