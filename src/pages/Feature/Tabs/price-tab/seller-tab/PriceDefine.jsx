import React, { useState, useContext } from "react";
import styled from "styled-components";
import FillInputs from "./FillInputs";
import ResultInfo from "../../../components/ResultInfo";
import {
  calculateFee,
  getFieldTranslationByNames,
  TimeAgo,
  ToastError,
  ToastSuccess,
  formatNumber,
} from "../../../../../services/Utility";
import { UserContext } from "../../../../../services/reducers/UserContext";
import useRequest from "../../../../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { FeatureContext } from "../../../Context/FeatureProvider";
import Container from "../../../../../components/Common/Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;  

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.6rem;

  font-size: 16px;
`;

const PriceDefine = () => {
  const [feature] = useContext(FeatureContext);
  const [user] = useContext(UserContext);
  const { Request, HTTP_METHOD, checkSecurity } = useRequest();
  const [assign, setAssign] = useState(
    +feature?.properties?.price_irr !== 0 ||
      +feature?.properties?.price_psc !== 0,
  );
  const [rial, setRial] = useState(feature?.properties?.price_irr || "");
  const [psc, setPsc] = useState(feature?.properties?.price_psc || "");
  const [errors, setErrors] = useState({
    rial: "",
    psc: "",
  });
const rialToPsc=feature?.properties?.price_irr/900;
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
    if (!checkSecurity()) return;

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
    <Container>
      <Wrapper>
        <Text>{getFieldTranslationByNames("520")}</Text>
        {!assign && (
          <FillInputs
          assign={assign}
            rial={rial}
            rialToPsc={rialToPsc}
            setRial={setRial}
            psc={psc}
            setPsc={setPsc}
            validateAndSubmit={validateAndSubmit}
            errors={errors}
            setAssign={setAssign}
          />
        )}
        {assign && (
          <ResultInfo
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

export default PriceDefine;
