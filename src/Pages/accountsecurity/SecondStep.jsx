import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import useRequest from "../../Services/Hooks/useRequest";
import { setItem } from "../../Services/Utility/LocalStorage";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Codes = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;

  margin-bottom: 30px !important;
  input {
    width: 30px;
    height: 50px;
    font-size: 16px;
    padding: 12px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid
      ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 400;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    input {
      width: 60px;
      height: 60px;
      font-size: 16px;
    }
  }
`;
const Container = styled.div`
  margin-top: 20px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }

  input {
    border-radius: 5px;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid
      ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
    padding: 14px 18px 14px 18px;
    outline: none;
    width: 93%;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    margin-top: 20px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtn};
    border: 1px solid
      ${(props) => props.theme.colors.newColors.otherColors.secondaryBtnBorder};
    margin-top: 30px;
    margin-bottom: 15px;
    color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtnText};
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    font-size: 15px;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    h4 {
      color: #008bf8;
      margin-left: 5px;
    }
    span {
      color: #969696;
    }
    h2 {
      font-size: 12px;
      color: #dc920a;
      cursor: pointer;
      &:hover {
        color: #ad740a;
      }
    }
  }
`;

const Alert = styled.div`
  color: #ffffff;
  h2 {
    font-size: 14px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 12px;
  }
`;

const SecondStep = ({ setStep, time }) => {
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(2 * 60);
  const [errors, setErrors] = useState(false);
  const { Request, HTTP_METHOD } = useRequest(); // Use the request hook
  const timerInterval = useRef(null);

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval.current);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (value.length === 1 && /^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");
    const digits = pasteData.split("").slice(0, 6);
    digits.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    });
  };
  const values = inputRefs.current.map((inputRef) => inputRef.value);
  const allValuesNotEmpty = values.every((value) => value !== "");

  const nextStep = () => {
    if (allValuesNotEmpty) {
      const code = values.join("");
      Request("account/security/verify", HTTP_METHOD.POST, { code })
        .then(() => {
          setItem("account_security", {
            account_security: Date.now() + parseInt(time) * 60 * 1000,
            time,
          });
          setStep(3);
          toast.success(
            <Alert>
              <h2>کیف پول شما با موفقیت خاموش شد.</h2>
              <h5>مدت زمان: {time} دقیقه</h5>
            </Alert>,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              bodyClassName: "success",
            }
          );
        })
        .catch(() => {
          setErrors(true);
          toast.error("کد وارد شده صحیح نمی‌باشد. لطفاً دوباره تلاش کنید.");
        });
    } else {
      setErrors(true);
    }
  };

  const resetInputs = () => {
    inputRefs.current.forEach((inputRef) => {
      inputRef.value = "";
    });
    inputRefs.current[0].focus();
  };

  const resetHandler = () => {
    resetInputs();
    clearInterval(timerInterval.current); // Clear the previous interval

    Request("account/security", HTTP_METHOD.POST, { time }) // Handle resend logic
      .then(() => {
        setErrors(false);
        setTimer(2 * 60); // Reset the timer to 2 minutes
        timerInterval.current = setInterval(() => {
          // Restart the timer interval
          setTimer((prevTimer) => {
            if (prevTimer > 0) {
              return prevTimer - 1;
            } else {
              clearInterval(timerInterval.current);
              return 0;
            }
          });
        }, 1000);
        toast.info("کد تأیید جدید ارسال شد.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("ارسال مجدد کد با مشکل مواجه شد. لطفاً دوباره تلاش کنید.");
      });
  };

  return (
    <Container>
      <h3>
        {getFieldTranslationByNames("account-security", "account verification")}
      </h3>
      <p>
        {getFieldTranslationByNames(
          "account-security",
          "enter the 6-digit code sent to the"
        )}
      </p>
      <Codes>
        {[...Array(6)].map((_, index) => (
          <input
            placeholder="-"
            key={index}
            type="number"
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(event) => handleInputChange(index, event)}
            onPaste={(event) => handlePaste(event)}
            className={errors ? "invalid-input" : ""}
          />
        ))}
      </Codes>
      <div>
        <h4>
          {formatTime(timer)
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
        </h4>
        {timer !== 0 ? (
          <span>
            {getFieldTranslationByNames(
              "account-security",
              "until resend the code"
            )}
          </span>
        ) : (
          <h2 onClick={resetHandler}>ارسال مجدد کد</h2>
        )}
      </div>
      <button disabled={!allValuesNotEmpty} onClick={nextStep}>
        {getFieldTranslationByNames("account-security", "continue")}
      </button>
    </Container>
  );
};

export default SecondStep;
