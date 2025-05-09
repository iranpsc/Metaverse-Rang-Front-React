import { useParams } from "react-router-dom";
import Colors from "./Colors";
import Level from "./Level";
import RealEstate from "./RealEstate";
import RestrictUser from "./RestrictUser";
import Text from "./Text";

const Details = () => {
  const {id} =useParams()
  return (
    <div>
      <Colors />
      <RealEstate />
      <Level />
      <RestrictUser />
{id && <Text/>}
    </div>
  );
};

export default Details;
