import React from 'react';
import { FullscreenControlContainer, CustomButton } from '../Layouts/Map/styles';
import { ReactComponent as FullPageIcon } from "../assets/images/fullPage.svg";

const FullscreenControls = ({ isPersian, onToggleFullScreen, onToggleMapFullScreen }) => (
  <>
    <FullscreenControlContainer isPersian={isPersian}>
      <CustomButton as={FullPageIcon} onClick={onToggleFullScreen} />
    </FullscreenControlContainer>
    <FullscreenControlContainer style={{ top: "125px" }} isPersian={isPersian}>
      <CustomButton
        as={FullPageIcon}
        style={{ transform: "rotate(45deg)" }}
        onClick={onToggleMapFullScreen}
      />
    </FullscreenControlContainer>
  </>
);

export default React.memo(FullscreenControls);