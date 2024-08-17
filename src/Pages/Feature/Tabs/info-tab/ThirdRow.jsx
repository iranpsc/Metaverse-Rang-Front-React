import { GrLocation } from "react-icons/gr";
import TextValueIcon from "../../../../Components/TextValueIcon";

const ThirdRow = ({ feature }) => {
  return (
    <TextValueIcon
      title="آدرس"
      value={feature?.properties?.address}
      icon={<GrLocation />}
    />
  );
};

export default ThirdRow;
