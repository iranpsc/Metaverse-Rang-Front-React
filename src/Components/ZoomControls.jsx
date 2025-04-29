import React from 'react';
import { ZoomContainer, ControlContainer, CustomButton } from '../Layouts/Map/styles';
import { ReactComponent as ZoomIcon } from "../assets/images/zoom.svg";
import { ReactComponent as UnZoomIcon } from "../assets/images/UnZoom.svg";

const ZoomControls = ({ isPersian, onZoomChange }) => (
  <ZoomContainer isPersian={isPersian}>
    <ControlContainer>
      <CustomButton as={ZoomIcon} onClick={() => onZoomChange(1)} />
    </ControlContainer>
    <ControlContainer>
      <CustomButton as={UnZoomIcon} onClick={() => onZoomChange(-1)} />
    </ControlContainer>
  </ZoomContainer>
);

export default React.memo(ZoomControls);