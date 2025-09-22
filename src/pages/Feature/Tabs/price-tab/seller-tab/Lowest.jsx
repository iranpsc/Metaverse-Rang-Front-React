import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../Components/Button";
import { UserContext } from "../../../../../services/Reducers/UserContext";
import { FeatureContext } from "../../../Context/FeatureProvider";
import useRequest from "../../../../../services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  TimeAgo,
  ToastError,
  ToastSuccess,
} from "../../../../../services/Utility";
import ResultInfo from "../../../Components/ResultInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-right: 15px;
  padding-top: 20px;
  @media (min-width: 600px) {
    overflow-y: auto;
  }
  @media (max-width: 1024px) {
    height: 100%;
  }
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
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();

  const [assign, setAssign] = useState(
    feature?.properties?.price_irr ? true : false
  );
  const [rial, setRial] = useState(feature?.properties?.price_irr || "");
  const [psc, setPsc] = useState(feature?.properties?.price_psc || "");
  useEffect(() => {
    setPercentage(feature?.properties?.minimum_price_percentage || "");
  }, []);
  const onSubmit = () => {
    if (TimeAgo(user?.birthdate) >= 18) {
      if (percentage < 80) {
        return ToastError(
          "برای افراد بالای 18 سال باید درصد وارد شده بیشتر از 80 باشد."
        );
      }
    } else {
      if (percentage < 110) {
        return ToastError(
          "برای افراد زیر 18 سال باید درصد وارد شده بیشتر از 110 باشد."
        );
      }
    }

    Request(
      `my-features/${user.id}/features/${feature?.id}`,
      HTTP_METHOD.POST,
      { minimum_price_percentage: percentage }
    )
      .then(() => {
        setFeature((feature) => ({
          ...feature,
          properties: {
            ...feature.properties,
            minimum_price_percentage: percentage,
          },
        }));
        ToastSuc;
        ToastSuccess("حداقل قیمت پیشنهادی شما با موفقیت ثبت شد.");
      })
      .catch((error) => {
   
          ToastError(error.response.data.message);
        
      });
  };
  return (
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
          rial={rial}
          setRial={setRial}
          psc={psc}
          setPsc={setPsc}
          setAssign={setAssign}
        />
      )}
    </Wrapper>
  );
};

export default Lowest;
