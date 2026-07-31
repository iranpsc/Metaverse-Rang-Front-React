import Title from "../../../../components/Title";
import { getTranslation } from "../../../../services/Utility";
import EditInputs from "./EditInputs";
import Container from "../../../../components/Common/Container";

const PhysicEdit = ({ setEdit, inputs, hasData, featureID, buildingID }) => (
  <Container>
    <Title title={hasData ? getTranslation(537) : getTranslation(356)} />
    <EditInputs
      hasData={hasData}
      inputs={inputs}
      setEdit={setEdit}
      featureID={featureID}
      buildingID={buildingID}
    />
  </Container>
);

export default PhysicEdit;
