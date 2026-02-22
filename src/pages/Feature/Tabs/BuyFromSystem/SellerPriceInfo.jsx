import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../../services/reducers/WalletContext";
import TextValueIcon from "../../../../components/TextValueIcon";
import { FeatureContext } from "../../Context/FeatureProvider";
import Button from "../../../../components/Button";
import useRequest from "../../../../services/Hooks/useRequest";
import {
  FeatureColor,
  FeatureSvg,
} from "../../../../services/constants/FeatureType";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../services/Utility";
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 20px;
  @media (min-width: 600px) {
    padding-left: 0;
    flex-direction: row;
  }
`;

const SellerPriceInfo = () => {
  const [wallet, dispatch] = useContext(WalletContext);
  const [feature] = useContext(FeatureContext);
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD, checkSecurity } = useRequest();

  const onSubmit = () => {
    const colorKey =
      feature.properties.karbari === "m"
        ? "yellow"
        : feature.properties.karbari === "t"
          ? "red"
          : feature.properties.karbari === "a"
            ? "blue"
            : null;

    const walletRaw = wallet[colorKey] || "0";
    const featurePrice = feature.properties.stability || "0";
    if (walletRaw < featurePrice) {
      const colorName =
        colorKey === "yellow"
          ? getFieldTranslationByNames("1599")
          : colorKey === "red"
            ? getFieldTranslationByNames("1600")
            : colorKey === "blue"
              ? getFieldTranslationByNames("1601")
              : "نامشخص";

      ToastError(colorName);
      return;
    }
    if (!checkSecurity()) return;
    Request(`features/buy/${feature.id}`, HTTP_METHOD.POST)
      .then((response) => {
        const newAmount = walletRaw - featurePrice;

        dispatch({
          type: WalletContextTypes.ADD_WALLET,
          payload: {
            ...wallet,
            [colorKey]: newAmount,
          },
        });
        Navigate(FeatureSvg(feature.properties.rgb));
      })
      .catch((error) => {
        ToastError(error?.response?.data?.message || "خطای غیرمنتظره");
      });
  };
  return (
    <>
      <InputsWrapper>
        <TextValueIcon
          title={getFieldTranslationByNames("521")}
          value={feature.properties.stability}
          valueIcon={FeatureColor(feature.properties.rgb)}
          very_long
        />
      </InputsWrapper>

      <Button label={getFieldTranslationByNames("353")} onclick={onSubmit} />
    </>
  );
};

export default SellerPriceInfo;
