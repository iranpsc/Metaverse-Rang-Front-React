import React from "react";
import ArrowUpImage from "../../assets/images/arrow-up.png";
import ArrowDownImage from "../../assets/images/arrow-down.png";

export default function CounterInput({
  text,
  name,
  dispatch,
  value = 0,
  step = 1,
  max = 55,
  min = 5,
}) {
  const onUpClick = () => {
    if (dispatch && value[name] < max) {
      dispatch({ ...value, [name]: value[name] + step });
    }
  };

  const onDownClick = () => {
    if (dispatch && value[name] > min) {
      dispatch({ ...value, [name]: value[name] - step });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <p className="pre-time-input text-information">{text}</p>
      <input
        type="text"
        className="d-number-arrows w-100-px account-security-code-input pe-5"
        maxLength="2"
        value={value[name]}
        disabled
      />

      <div className="d-flex flex-direction-column ms-2">
        <div
          className={`cursor-pointer text-1 text-light p-1 d-flex mb-2 ${
            value[name] === max && "object-disabled"
          }`}
        >
          <img
            src={ArrowUpImage}
            width="16"
            alt="arrow-up"
            onClick={() => onUpClick()}
          />
        </div>

        <div
          className={`cursor-pointer text-1 text-light p-1 d-flex ${
            value[name] <= min && "object-disabled"
          }`}
        >
          <img
            src={ArrowDownImage}
            width="16"
            alt="arrow-down"
            onClick={() => onDownClick()}
          />
        </div>
      </div>
    </div>
  );
}
