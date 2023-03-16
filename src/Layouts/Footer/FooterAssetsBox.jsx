import Tippy from "@tippyjs/react";

const borderClass = {
  purple: "purple-box-shadow",
  blue: "blue-box-shadow",
  gold: "gold-box-shadow",
  red: "red-box-shadow",
  yellow: "yellow-box-shadow",
  white: "white-box-shadow",
};

export default function FooterAssetsBox({
  value,
  image,
  alt,
  borderColor = "white",
  TitleToltip,
  ContentToltip,
}) {
  return (
    <Tippy
      content={
        <div  className="tooltip-container">
            <div className="tooltip-container-2">
          <span className="title-toltip">{TitleToltip}</span>
          <p>{ContentToltip}</p>
        </div>
        </div>
      }
      zIndex={10000}
    >
      <div className="footer-assets">
        <img className="footer-assets-image" src={image} alt={alt} />
        <div className={`footer-value ${borderClass[borderColor]}`}>
          <p>{value ? value : "000.0"}</p>
        </div>
      </div>
    </Tippy>
  );
}
