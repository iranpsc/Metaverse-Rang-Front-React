import satisfy from "../../../../Assets/gif/satisfaction.gif";
import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../Services/Utility";

const Container = styled.div`
  padding: 70px 30px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    padding: 30px;
  }
`;
const First = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
  }
  span {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  @media (min-width: 860px) {
    h3 {
      font-size: 24px;
    }
    span {
      font-size: 20px;
    }
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  span {
    &:nth-of-type(2) {
      margin: 0 10px;
      color: #454545;
    }
  }
  @media (min-width: 940px) {
    font-size: 15px;
  }
`;
const SatisfyCount = () => {
  return (
    <Container>
      <img
        width={100}
        height={100}
        src={satisfy}
        alt={getFieldTranslationByNames("property-information", "satisfaction")}
      />
      <First>
        <h3>۵.۰۴۸</h3>
        <span>
          {getFieldTranslationByNames("property-information", "satisfaction")}
        </span>
      </First>
      <Second>
        <span>
          {convertToPersian(27)}
          {getFieldTranslationByNames("property-information", "day")}
        </span>
        <span>|</span>
        <span>
          {" "}
          {convertToPersian(12)}{" "}
          {getFieldTranslationByNames("property-information", "hour")}{" "}
          {convertToPersian(21)}{" "}
          {getFieldTranslationByNames("property-information", "minutes")}{" "}
          {convertToPersian(34)}{" "}
          {getFieldTranslationByNames("property-information", "second")}{" "}
        </span>
      </Second>
    </Container>
  );
};

export default SatisfyCount;
