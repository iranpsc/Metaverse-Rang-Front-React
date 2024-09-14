import { GrLocation } from "react-icons/gr";
import TextValueIcon from "../../../../Components/TextValueIcon";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const ThirdRow = ({ feature }) => {
  return (
    <TextValueIcon
      title={getFieldTranslationByNames("property-information", "address")}
      value={feature?.properties?.address}
      icon={<GrLocation />}
    />
  );
};

export default ThirdRow;
