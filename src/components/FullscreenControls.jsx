import React from "react";
import {
  FullscreenControlContainer,
  CustomButton,
} from "../layouts/map/styles";
import { ReactComponent as FullPageIcon } from "../assets/images/fullPage.svg";

const FullscreenControls = ({
  isPersian,
  onToggleFullScreen,
  onToggleMapFullScreen,
  isFullScreenMap,
}) => {
  const isMobile = window.innerWidth <= 1024;

  return (
    <>
      {!isMobile && !isFullScreenMap && (
        <FullscreenControlContainer isPersian={isPersian}>
          <CustomButton as={FullPageIcon} onClick={onToggleFullScreen} />
        </FullscreenControlContainer>
      )}

      <FullscreenControlContainer
        style={{
          top: isMobile
            ? isFullScreenMap && "85px"
            : isFullScreenMap
              ? "85px"
              : "125px", 
        }}
        isPersian={isPersian}
      >
        <CustomButton
          as={FullPageIcon}
          style={{ transform: "rotate(45deg)" }}
          onClick={onToggleMapFullScreen}
        />
      </FullscreenControlContainer>
    </>
  );
};

export default React.memo(FullscreenControls);
