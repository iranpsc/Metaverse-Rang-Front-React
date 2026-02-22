import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Button from "../../../../../components/Button";
import { UserContext } from "../../../../../services/reducers/UserContext";
import { FeatureContext } from "../../../Context/FeatureProvider";
import useRequest from "../../../../../services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  TimeAgo,
  ToastError,
  ToastSuccess,
  formatNumber,
} from "../../../../../services/Utility";
import Container from "../../../../../components/Common/Container";
import ResultInfo from "../../../components/ResultInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.8rem;
`;

const InputWrapper = styled.div`
  height: 50px !important;
  position: relative;
  border-radius: 5px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  overflow: hidden;
  width: 276px;
`;

const Div = styled.div`
  height: 50px !important;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  border: none;
  height: 50px !important;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  outline: none;
  padding-right: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Span = styled.span`
  position: absolute;
  color: gray;
  left: 10px;
  top: 24%;
`;

const Lowest = () => {
  const [percentage, setPercentage] = useState("");
  const [user] = useContext(UserContext);
  const [feature, setFeature] = useContext(FeatureContext);
  const { Request, HTTP_METHOD, checkSecurity } = useRequest();

  const [assign, setAssign] = useState(
    +feature?.properties?.price_irr !== 0 ||
      +feature?.properties?.price_psc !== 0,
  );
  const [rial, setRial] = useState(feature?.properties?.price_irr || "");
  const [psc, setPsc] = useState(feature?.properties?.price_psc || "");
  useEffect(() => {
    setPercentage(feature?.properties?.minimum_price_percentage || "");
  }, []);
  const onSubmit = () => {
    if (user.birthdate == null) {
      if (percentage < 110) {
        return ToastError(getFieldTranslationByNames(1647));
      }
    }

    if (TimeAgo(user?.birthdate) >= 18) {
      if (percentage < 80) {
        return ToastError(getFieldTranslationByNames(1632));
      }
    } else {
      if (percentage < 110) {
        return ToastError(getFieldTranslationByNames(1632));
      }
    }
    if (!checkSecurity()) return;

    Request(
      `my-features/${user.id}/features/${feature?.id}`,
      HTTP_METHOD.POST,
      { minimum_price_percentage: percentage },
    )
      .then((res) => {
        //console.log(res);
        setFeature((feature) => ({
          ...feature,
          properties: {
            ...feature.properties,
            minimum_price_percentage: percentage,
          },
        }));
        ToastSuccess(getFieldTranslationByNames(1634));
      })
      .catch((error) => {
        ToastError(error.response.data.message);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Text>{getFieldTranslationByNames("518")}</Text>
        <Div>
          <InputWrapper>
            <Input
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              type="number"
              min={0}
              max={100}
              placeholder="100"
            />
            <Span>%</Span>
          </InputWrapper>
        </Div>
        <Button label={getFieldTranslationByNames("519")} onClick={onSubmit} />
        {assign && (
          <ResultInfo
            lowest
            rial={formatNumber(rial)}
            setRial={setRial}
            psc={formatNumber(psc)}
            setPsc={setPsc}
            setAssign={setAssign}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Lowest;
