import { GrLocation } from "react-icons/gr";
import TextValueIcon from "../../../../Components/TextValueIcon";

const ThirdRow = () => {
  return (
    <TextValueIcon
      title="آدرس"
      value="تهران، خیابان انقلاب، کوی گلها، ساختمان بهاران "
      icon={<GrLocation />}
    />
  );
};

export default ThirdRow;
