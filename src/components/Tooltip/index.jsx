import Tippy from "@tippyjs/react";
import './index.css'
export default function ToolTip({ TitleToltip, ContentToltip, Chidren,classNamePosstion }) {
  return (
    <Tippy
      content={
        <div className="tooltip-container">
          <div className="tooltip-container-2">
            <span className="title-toltip">{TitleToltip}</span>
            <p>{ContentToltip}</p>
          </div>
        </div>
      }
      zIndex={10000}
      className={classNamePosstion } 
    >
      {Chidren}
    </Tippy>
  );
}
