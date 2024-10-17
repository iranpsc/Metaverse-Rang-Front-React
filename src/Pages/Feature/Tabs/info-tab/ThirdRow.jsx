import { GrLocation } from "react-icons/gr";
import TextValueIcon from "../../../../Components/TextValueIcon";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const ThirdRow = ({ feature }) => {
  // Function to reverse the order of address components
  const reverseAddress = (address) => {
    if (!address) return "";

    // Split the address by commas and trim any extra spaces
    const parts = address.split(",").map((part) => part.trim());

    // Reverse the parts and join them back with a comma
    return parts.reverse().join(", ");
  };

  // Get the original address and reverse it
  const reversedAddress = reverseAddress(feature?.properties?.address);

  return (
    <TextValueIcon
      title={getFieldTranslationByNames("property-information", "address")}
      value={reversedAddress} // Using the reversed address here
      icon={<GrLocation />}
    />
  );
};

export default ThirdRow;
