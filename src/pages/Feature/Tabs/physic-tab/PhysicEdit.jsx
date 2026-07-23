import Title from "../../../../components/Title";
import { getTranslation } from "../../../../services/Utility";
import EditInputs from "./EditInputs";
import Container from "../../../../components/Common/Container";

const PhysicEdit = ({ setEdit, inputs, setInputs, hasData,featureID,buildingID }) => {
  return (
    <Container>
      <Title title={hasData ? getTranslation(537) : getTranslation(356)} />
      <EditInputs hasData={hasData} inputs={inputs} setInputs={setInputs} setEdit={setEdit} featureID={featureID} buildingID={buildingID} />
    </Container>
  );
};

export default PhysicEdit;
