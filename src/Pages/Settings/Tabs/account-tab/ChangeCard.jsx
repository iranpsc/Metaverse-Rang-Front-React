import { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";
import { toast } from "react-toastify";
import Button from "../../../../Components/Button";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import Title from "../../../../Components/Title";
import useRequest from "../../../../Services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../../Services/Utility";
import {
  phoneNumberNormalizer,
  phoneNumberValidator,
} from "@persian-tools/persian-tools";
import { useNavigate } from "react-router-dom";

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

const ChangeCard = ({ id, title, warn, inputs }) => {
  const { Request, HTTP_METHOD } = useRequest();
  const [sentPhone, setSentPhone] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [inputErrors, setInputErrors] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    if (Array.isArray(inputs)) {
      setInputValues(
        inputs.map((input) => ({ id: input.id, value: input.value }))
      );
      setInputErrors(inputs.map((input) => ({ id: input.id, error: "" })));
    }
  }, [inputs]);

  const handleInputChange = (inputId, value) => {
    setInputValues((prevInputValues) =>
      prevInputValues.map((input) =>
        input.id === inputId ? { ...input, value } : input
      )
    );

    setInputErrors((prevInputErrors) =>
      prevInputErrors.map((input) =>
        input.id === inputId
          ? { ...input, error: validateInput(input, value) }
          : input
      )
    );
  };

  const validateInput = (input, value) => {
    if (input.validation === "mobile") {
      try {
        phoneNumberValidator(phoneNumberNormalizer(value, "0"));
      } catch {
        return "شماره موبایل وارد شده صحیح نیست.";
      }
    } else if (input.validation === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        return "آدرس ایمیل وارد شده صحیح نیست.";
      }
    } else if (input.validation === "password") {
      if (value.length < 6) {
        return "رمز عبور باید حداقل شامل ۶ کاراکتر باشد.";
      }
    }
    return "";
  };

  const handleSave = () => {
    if (!sentPhone) {
      const phoneInput = inputValues.find((input) => input.id == "1");
      if (phoneInput && phoneInput.value) {
        try {
          phoneNumberValidator(phoneNumberNormalizer(phoneInput.value, "0"));
          Request("reset/phone", HTTP_METHOD.POST, {
            phone: phoneNumberNormalizer(phoneInput.value, "0"),
          })
            .then(() => {
              setSentPhone(true);
              ToastSuccess("کد تایید باموفقیت به شماره تلفن شما ارسال شد.");
            })
            .catch((error) => {
              if (error.response.status === 410) {
                ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
                return Navigate("/metaverse/confirmation");
              }

              ToastError(error.response.data.message);
            });
        } catch {
          ToastError("شماره تلفن معتبر نمی باشد.");
        }
      } else {
        ToastError("لطفا شماره تلفن را وارد کنید.");
      }
    } else {
      const codeInput = inputValues.find((input) => input.id === "code");
      if (codeInput && codeInput.value.length === 6) {
        Request("reset/phone/verify", HTTP_METHOD.POST, {
          code: codeInput.value,
        })
          .then(() => {
            setSentPhone(false);
            setInputValues(
              inputs.map((input) => ({ id: input.id, value: "" }))
            );
            ToastSuccess("شماره تلفن با موفقیت بروزرسانی شد.");
          })
          .catch(() => {
            ToastError("مشکلی در بروزرسانی شماره تلفن به وجود امد.");
          });
      } else {
        ToastError("کد تایید باید 6 کاراکتر داشته باشد.");
      }
    }
  };

  if (!Array.isArray(inputs) || inputs.length === 0) {
    return null;
  }

  return (
    <Container id={id}>
      <Title title={getFieldTranslationByNames(title)} />
      {warn && (
        <Warn>
          <RiErrorWarningLine size={22} />
          <h3>{warn}</h3>
        </Warn>
      )}
      <Inputs>
        {inputs.map((item) => (
          <div key={item.id}>
            <EditInput
              type={item.type}
              value={
                inputValues.find((input) => input.id === item.id)?.value || ""
              }
              onchange={(e) => handleInputChange(item.id, e.target.value)}
              title={getFieldTranslationByNames(item.label)}
              error={
                inputErrors.find((input) => input.id === item.id)?.error || ""
              }
            />
            {inputErrors.find((input) => input.id === item.id)?.error && (
              <Error>
                {inputErrors.find((input) => input.id === item.id)?.error}
              </Error>
            )}
          </div>
        ))}
      </Inputs>

      <Button
        full
        label={getFieldTranslationByNames("629")}
        onclick={handleSave}
      />
    </Container>
  );
};

export default ChangeCard;
