import React, { useState, useContext, useMemo } from "react";
import styled from "styled-components";
import FillInputs from "./FillInputs";
import ResultInfo from "../../../components/ResultInfo";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { FeaturePrice } from "../../../../../services/constants/FeatureType";
import { getItem } from "../../../../../services/Utility/LocalStorage";
import {
  ToastSuccess,
  ToastError,
  getFieldTranslationByNames,
  calculateFee,
} from "../../../../../services/Utility";
import useRequest from "../../../../../services/Hooks/useRequest";
import BaseContainer from "../../../../../components/Common/Container";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../../../services/reducers/WalletContext";

const Wrapper = styled(BaseContainer)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;

  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    line-height: 1.5rem;
  }
`;

const PSC_RATE = 900;

const SuggestPrice = () => {
  const [wallet, dispatch] = useContext(WalletContext);
  const [feature] = useContext(FeatureContext);
  const { Request, HTTP_METHOD } = useRequest();

  const accountSecurity = getItem("account_security")?.account_security;

  const totalIrr = useMemo(() => {
    if (!feature?.properties) return 0;

    const { stability, rgb, minimum_price_percentage } = feature.properties;

    return stability * FeaturePrice(rgb) * (minimum_price_percentage / 100);
  }, [feature]);

  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState(totalIrr / 2);
  const [psc, setPsc] = useState(totalIrr / 2 / PSC_RATE);
  const [suggestText, setSuggestText] = useState("");
  const [errors, setErrors] = useState({});

  const rialValue = Number(rial) || 0;
  const pscValue = Number(psc) || 0;

  const totalPrice = useMemo(
    () => rialValue + pscValue * PSC_RATE,
    [rialValue, pscValue]
  );

  const validate = () => {
    if (totalPrice < totalIrr) {
      return `حداقل ارزش معامله ${feature?.properties?.minimum_price_percentage}% قیمت اولیه میباشد`;
    }

    if (rialValue > (wallet?.irr || 0)) {
      return getFieldTranslationByNames("1604");
    }

    if (pscValue > (wallet?.psc || 0)) {
      return getFieldTranslationByNames("1605");
    }

    if (!accountSecurity) {
      return getFieldTranslationByNames("1603");
    }

    return null;
  };

  const handleSubmit = () => {
    setErrors({});

    const errorMessage = validate();
    if (errorMessage) {
      ToastError(errorMessage);
      return;
    }

    Request(`buy-requests/store/${feature?.id}`, HTTP_METHOD.POST, {
      price_irr: rialValue,
      price_psc: pscValue,
      note: suggestText,
    })
      .then(() => {
        ToastSuccess(getFieldTranslationByNames("1607"));

        dispatch({
          type: WalletContextTypes.ADD_WALLET,
          payload: {
            ...wallet,
            irr: wallet.irr - calculateFee(rialValue),
            psc: wallet.psc - calculateFee(pscValue),
          },
        });

        setAssign(true);
      })
      .catch((error) => {
        ToastError(error?.response?.data?.message || "خطای غیرمنتظره");
      });
  };

  return (
    <Wrapper>
      <p>{getFieldTranslationByNames("527")}</p>

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

      {assign && (
        <ResultInfo rial={rialValue} psc={pscValue} setAssign={setAssign} />
      )}
    </Wrapper>
  );
};

export default SuggestPrice;
