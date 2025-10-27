import React, { useState, useContext } from "react";
import styled from "styled-components";
import FillInputs from "./FillInputs";
import ResultInfo from "../../../components/ResultInfo";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { FeaturePrice } from "../../../../../services/constants/FeatureType";
import {
  ToastSuccess,
  ToastError,
  getFieldTranslationByNames,
} from "../../../../../services/Utility";
import useRequest from "../../../../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 30px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.5rem;
`;

const SuggestPrice = () => {
  const [feature] = useContext(FeatureContext);
  const { Request, HTTP_METHOD } = useRequest();
  const navigate = useNavigate();

  const totalArea = feature?.properties?.density * feature?.properties?.area;
  const totalIrr =
    totalArea *
    FeaturePrice(feature?.properties?.rgb) *
    (feature?.properties?.minimum_price_percentage / 100);
  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState(totalIrr / 2);
  const [psc, setPsc] = useState(totalIrr / 2 / 900);
  const [suggestText, setSuggestText] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const totalPrice = parseFloat(rial) + parseFloat(psc) * 900;

    if (totalPrice >= totalIrr) {
      Request(`buy-requests/store/${feature?.id}`, HTTP_METHOD.POST, {
        price_irr: parseFloat(rial),
        price_psc: parseFloat(psc),
        note: suggestText,
      })
        .then(() => {
          ToastSuccess("پیشنهاد شما با موفقیت ارسال گردید.");
          setAssign(true);
        })
        .catch((error) => {
          ToastError(error.response.data.message);
        });
    } else {
      setErrors({
        price: `حداقل ارزش معامله ${feature?.properties?.minimum_price_percentage}% قیمت اولیه میباشد`,
      });
    }
  };

  return (
    <Wrapper>
      <Text>{getFieldTranslationByNames("527")}</Text>
      {!assign && (
        <FillInputs
          rial={rial}
          psc={psc}
          setRial={setRial}
          setPsc={setPsc}
          suggestText={suggestText}
          setSuggestText={setSuggestText}
          onSubmit={handleSubmit}
          errors={errors}
          totalIrr={totalIrr}
        />
      )}
      {assign && <ResultInfo rial={rial} psc={psc} setAssign={setAssign} />}
    </Wrapper>
  );
};

export default SuggestPrice;
