import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";
import { Container, Label } from "../../../../components/sidbar";

const SideBar = ({ tools, option, setOption }) => {
  return (
    <Container>
      {tools.map((item) => (
        <Label
          menu={option === item.id}
          onClick={() => setOption(item.id)}
          key={item.id}
        >
          {getFieldTranslationByNames("504")}
          {convertToPersian(item.number)}
          {getFieldTranslationByNames("505")}
        </Label>
      ))}
    </Container>
  );
};

export default SideBar;
