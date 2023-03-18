import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PercentageIcon from "./PercentageIcon";

import KycImage from "../../Assets/images/kyc.png";
import ToolTip from "../Tooltip";

const RightIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35%;
  right: 31px;
  z-index: 500;
  gap: 16px;
`;

const Icon = styled.img`
  width: 56px;
  cursor: pointer;
`;

export default function LeftIcon() {
  const navigation = useNavigate();

  return (
    <RightIconContainer>
      <ToolTip
        Chidren={
          <Icon
            src={KycImage}
            onClick={() => navigation(`/metaverse/verification`)}
          />
        }
        TitleToltip={"احراز هویت"}
        ContentToltip={"احراز هویت شخصی و بانکی"}
        classNamePosstion={"tw-righticon"}
      />
      <PercentageIcon />
    </RightIconContainer>
  );
}
