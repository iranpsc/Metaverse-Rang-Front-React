import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";
import { Container,Label } from "../../../../components/sidbar";

const SideBar = ({ currencies, option, setOption }) => {
  return (
    <Container>
        {currencies.map((item) => (
          <Label
            menu={option === item.id}
            onClick={() => setOption(item.id)}
            key={item.id}
          >
            {getFieldTranslationByNames("504")}
            {"  "}
            {convertToPersian(item.id)}
          </Label>
        ))}
    </Container>
  );
};

export default SideBar;
