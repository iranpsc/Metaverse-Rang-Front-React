import { cloneElement, useId } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";

export default function ToolTip({
  TitleToltip,
  ContentToltip,
  Chidren,
  classNamePosstion,
}) {
  const tooltipId = useId();

  const child = cloneElement(Chidren, {
    "data-tooltip-id": tooltipId,
  });

  return (
    <>
      {child}

      <ReactTooltip
        id={tooltipId}
        place="left"
        delayShow={50}
        noArrow
        opacity={1}
        style={{
          zIndex: 10000,
          padding: 0,
          background: "transparent",
        }}
      >
        <div className={`tooltip-container ${classNamePosstion || ""}`}>
          <div className="tooltip-container-2">
            <span className="title-toltip">{TitleToltip}</span>
            <p>{ContentToltip}</p>
          </div>
        </div>
      </ReactTooltip>
    </>
  );
}
