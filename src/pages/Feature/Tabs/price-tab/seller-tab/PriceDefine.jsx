import React, { useState, useContext } from "react";
import styled from "styled-components";
import FillInputs from "./FillInputs";
import ResultInfo from "../../../Components/ResultInfo";
import {
  calculateFee,
  getFieldTranslationByNames,
  TimeAgo,
  ToastError,
  ToastSuccess,
} from "../../../../../services/Utility";
import { UserContext } from "../../../../../services/reducers/UserContext";
import useRequest from "../../../../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { FeatureContext } from "../../../Context/FeatureProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 15px;
  padding-top: 20px;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 60vh !important;
    overflow: auto;
  }
  @media (min-width: 1023px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.6rem;

  font-size: 16px;
`;

const PriceDefine = () => {
  const [feature] = useContext(FeatureContext);
  const [user] = useContext(UserContext);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();

  const [assign, setAssign] = useState(
    feature?.properties?.price_irr ? true : false
  );
  const [rial, setRial] = useState(feature?.properties?.price_irr || "");
  const [psc, setPsc] = useState(feature?.properties?.price_psc || "");
  const [errors, setErrors] = useState({
    rial: "",
    psc: "",
  });

  const validateAndSubmit = () => {
    const userAge = TimeAgo(user?.birthdate);
    let minRial = calculateFee(feature.properties.price_irr, 80);
    let minPsc = calculateFee(feature.properties.price_psc, 80);

    if (userAge < 18) {
      minRial = calculateFee(feature.properties.price_irr, 110);
      minPsc = calculateFee(feature.properties.price_psc, 110);
    }

    if (rial < minRial) {
      return setErrors((prev) => ({
        ...prev,
        rial: `حداقل ارزش معامله ${minRial}% قیمت اولیه میباشد`,
      }));
    }

    if (psc < minPsc) {
      return setErrors((prev) => ({
        ...prev,
        psc: `حداقل ارزش معامله ${minPsc}% قیمت اولیه میباشد`,
      }));
    }

    setErrors({
      rial: "",
      psc: "",
    });

    const formData = {
      price_irr: rial,
      price_psc: psc,
    };

    Request(`sell-requests/store/${feature?.id}`, HTTP_METHOD.POST, formData)
      .then(() => {
        ToastSuccess("VOD با موفقیت قیمت گذاری شد.");
        setAssign(true);
      })
      .catch((error) => {
    
          ToastError(error.response.data.message);
        
      });
  };

  return (
    <Wrapper>
      <Text>
        {getFieldTranslationByNames("520")}
      </Text>
      {!assign && (
        <FillInputs
          rial={rial}
          setRial={setRial}
          psc={psc}
          setPsc={setPsc}
          setAssign={validateAndSubmit}
          errors={errors}
        />
      )}
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

export default PriceDefine;
