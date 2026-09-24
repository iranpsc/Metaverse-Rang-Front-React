import { useEffect, useMemo, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";
import Button from "../../../../components/Button";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import Title from "../../../../components/Title";
import useRequest from "../../../../services/Hooks/useRequest";
import {
  getTranslation,
  ToastError,
  ToastSuccess,
} from "../../../../services/Utility";
import {
  phoneNumberNormalizer,
  phoneNumberValidator,
} from "@persian-tools/persian-tools";

const PHONE_INPUT_ID = "phone";
const CODE_INPUT_ID = "code";

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  order: ${(props) => props.id === 3 && "4"};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;
`;

const Warn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  margin-bottom: 20px;
  svg {
    color: ${(props) => props.theme.colors.primary};
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 11px;
    font-weight: 400;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -20px;
`;

const ChangeCard = ({
  id,
  inputs,
  availableResetMobileResets = 0,
  onResetMobileSuccess,
}) => {
  const { Request, HTTP_METHOD } = useRequest();
  const [step, setStep] = useState("phone");
  const [isSending, setIsSending] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [inputErrors, setInputErrors] = useState([]);
  const [remainingResets, setRemainingResets] = useState(
    Number(availableResetMobileResets) || 0
  );

  useEffect(() => {
    setRemainingResets(Number(availableResetMobileResets) || 0);
  }, [availableResetMobileResets]);

  const buildInputEntries = (mapper) =>
    Array.isArray(inputs) ? inputs.map(mapper) : [];

  const getInitialValues = () =>
    buildInputEntries((input) => ({
      id: String(input.id),
      value: input.value ?? "",
    }));

  const getInitialErrors = () =>
    buildInputEntries((input) => ({
      id: String(input.id),
      error: "",
    }));

  useEffect(() => {
    if (!Array.isArray(inputs)) return;

    setInputValues(getInitialValues());
    setInputErrors(getInitialErrors());
    setStep("phone");
  }, [inputs]);

  const getInputValue = (id) =>
    inputValues.find((item) => String(item.id) === String(id))?.value ?? "";

  const getInputError = (id) =>
    inputErrors.find((item) => String(item.id) === String(id))?.error ?? "";

  const validateInput = (input, value) => {
    if (!input) return "";

    if (input.validation === "mobile") {
      try {
        phoneNumberValidator(phoneNumberNormalizer(value, "0"));
        return "";
      } catch {
        return getTranslation(1834);
      }
    }

    if (input.validation === "code") {
      if (String(value).trim().length !== 6) {
        return getTranslation(1833);
      }
      return "";
    }

    return "";
  };

  const handleInputChange = (inputId, value) => {
    const normalizedId = String(inputId);
    const currentInput =
      inputs.find((item) => String(item.id) === normalizedId) || {
        id: normalizedId,
        validation: normalizedId === CODE_INPUT_ID ? "code" : "mobile",
      };

    setInputValues((prevValues) => {
      const exists = prevValues.some(
        (item) => String(item.id) === normalizedId
      );

      if (exists) {
        return prevValues.map((item) =>
          String(item.id) === normalizedId ? { ...item, value } : item
        );
      }

      return [...prevValues, { id: normalizedId, value }];
    });

    setInputErrors((prevErrors) => {
      const exists = prevErrors.some(
        (item) => String(item.id) === normalizedId
      );

      const error = validateInput(currentInput, value);

      if (exists) {
        return prevErrors.map((item) =>
          String(item.id) === normalizedId ? { ...item, error } : item
        );
      }

      return [...prevErrors, { id: normalizedId, error }];
    });
  };

  const visibleInputs = useMemo(() => {
    if (!Array.isArray(inputs)) return [];

    const baseInputs = inputs.filter((item) => String(item.id) !== CODE_INPUT_ID);

    if (step === "phone") return baseInputs;

    return [
      ...baseInputs,
      {
        id: CODE_INPUT_ID,
        type: "number",
        label: 628,
        value: "",
        validation: "code",
      },
    ];
  }, [inputs, step]);

  const handleSave = () => {
    setIsSending(true);

    if (step === "phone") {
      const rawPhone = getInputValue(PHONE_INPUT_ID);

      if (!rawPhone) {
        ToastError(getTranslation(1837));
        setIsSending(false);
        return;
      }

      try {
        const normalizedPhone = phoneNumberNormalizer(rawPhone, "0");
        phoneNumberValidator(normalizedPhone);

        Request("mobile/send", HTTP_METHOD.POST, {
          mobile: normalizedPhone,
        })
          .then(() => {
            setStep("code");
            ToastSuccess(getTranslation(1836));
          })
          .catch((error) => {
            ToastError(
              error.response?.data?.message || getTranslation(1835)
            );
          })
          .finally(() => {
            setIsSending(false);
          });
      } catch {
        ToastError(getTranslation(1834));
        setIsSending(false);
      }
      return;
    }

    const codeValue = getInputValue(CODE_INPUT_ID);

    if (!codeValue || String(codeValue).trim().length !== 6) {
      ToastError(getTranslation(1833));
      setIsSending(false);
      return;
    }

    Request("mobile/verify", HTTP_METHOD.POST, {
      code: codeValue,
    })
      .then(() => {
        setStep("phone");
        setInputValues(getInitialValues());
        setInputErrors(getInitialErrors());

        const nextResetCount = Math.max(remainingResets - 1, 0);
        setRemainingResets(nextResetCount);

        if (typeof onResetMobileSuccess === "function") {
          onResetMobileSuccess(nextResetCount);
        }

        ToastSuccess(getTranslation(1832));
      })
      .catch(() => {
        ToastError(getTranslation(1831));
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  if (!Array.isArray(inputs) || inputs.length === 0) {
    return null;
  }

  const isDisabled =
    step === "phone"
      ? !getInputValue(PHONE_INPUT_ID)
      : !getInputValue(CODE_INPUT_ID) ||
      String(getInputValue(CODE_INPUT_ID)).trim().length !== 6;

  const buttonLabel = step === "phone" ? getTranslation("629") : getTranslation("628");
  const warnMessage = ` ${remainingResets} ${getTranslation("1830")}`;

  return (
    <Container id={id}>
      <Title title={getTranslation(625)} />
      {warnMessage && (
        <Warn>
          <RiErrorWarningLine size={22} />
          <h3>{warnMessage}</h3>
        </Warn>
      )}

      <Inputs>
        {visibleInputs.map((item) => {
          const inputId = String(item.id);
          const itemValue = getInputValue(inputId);
          const itemError = getInputError(inputId);

          return (
            <div key={inputId}>
              <EditInput
                type={item.type}
                value={itemValue}
                onchange={(e) => handleInputChange(inputId, e.target.value)}
                title={getTranslation(item.label) || item.label}
                error={itemError}
              />
              {itemError && <Error>{itemError}</Error>}
            </div>
          );
        })}
      </Inputs>

      <Button
        full
        label={buttonLabel}
        onclick={handleSave}
        disabled={isDisabled ? true : isSending ? "pending" : false}
      />
    </Container>
  );
};

export default ChangeCard;