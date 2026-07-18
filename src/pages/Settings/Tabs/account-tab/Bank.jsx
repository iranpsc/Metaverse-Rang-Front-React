import Dropdown from "../../../../components/Common/Dropdown";
import styled from "styled-components";
import { useState } from "react";
import Title from "../../../../components/Title";
import Button from "../../../../components/Button";
import {
  getTranslation,
  ToastError,
  ToastSuccess,
} from "../../../../services/Utility";
import useRequest from "../../../../services/Hooks/useRequest";
const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  padding-bottom: ${(props) => (props.id === 1 ? "20px" : "0")};
  border-bottom: ${(props) => (props.id === 1 ? "1px solid #454545" : "none")};
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    outline: none;
    width: 70px;
    font-size: 16px;
    height: 50px;
    border: 1px solid ${(props) => (props.error ? "red" : "#454545")};
    border-radius: 5px;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  @media (min-width: 1024px) {
    span {
      font-size: 16px;
    }
  }
`;

const options = [
  { id: 1, label: "IR-125478963258745896324587" },
  { id: 2, label: "IR-125478963258745896324587" },
];

const Bank = (settings) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isSending, setIsSending] = useState(false); // حالت لودینگ دکمه
  const { Request, HTTP_METHOD } = useRequest();
  const data = settings.settings;
  const items_info = [
    {
      id: 1,
      translationId: "637",
      value: data?.checkout_days_count,
      name: "checkout_days_count",
    },
    {
      id: 2,
      translationId: "638",
      value: data?.automatic_logout,
      name: "automatic_logout",
    },
  ];
  const [items, setItems] = useState(items_info);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const handleInputChange = (e, itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? { ...item, value: e.target.value, error: false }
        : item,
    );
    setItems(updatedItems);
  };

  const handleSaveButtonClick = () => {
    let hasError = false;

    items.forEach((item) => {
      if (item.value === "") {
        hasError = true;
        item.error = true;
      } else if (item.name === "automatic_logout" && item.value < 1) {
        hasError = true;
        item.error = true;
        ToastError(getTranslation(1769));
      } else if (item.name === "automatic_logout" && item.value > 55) {
        hasError = true;
        item.error = true;
        ToastError(getTranslation(1770 ));
      } else if (item.name === "checkout_days_count" && item.value < 3) {
        hasError = true;
        item.error = true;
        ToastError(getTranslation(1771));
      } else if (item.name === "checkout_days_count" && item.value > 1000) {
        hasError = true;
        item.error = true;
        ToastError(getTranslation(1772));
      } else {
        item.error = false;
      }
    });

    setItems([...items]);

    if (!hasError) {
      setIsSending(true); 

      const formData = items.reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

      Request("settings", HTTP_METHOD.POST, formData)
        .then(() => {
          ToastSuccess(getTranslation(1773));
        })
        .catch((error) => {
          ToastError(error.response?.data?.message || getTranslation(1774));
        })
        .finally(() => {
          setIsSending(false); 
        });
    }
  };
  const isDisabled = items.some((item) => item.value === "");

  return (
    <Container>
      <Title title={getTranslation("635")} />

      <Dropdown
        options={options.map((item) => ({
          value: item.label,
          label: item.label,
        }))}
        selected={selectedValue}
        onSelect={handleSelectChange}
        placeholder={getTranslation("636")}
      />

      <Wrapper>
        {items.map((item) => (
          <Div error={item.error} id={item.id} key={item.id}>
            <span>{getTranslation(item.translationId)}</span>
            <input
              onChange={(e) => handleInputChange(e, item.id)}
              value={item.value}
              placeholder="0"
              type="number"
            />
          </Div>
        ))}
      </Wrapper>

      <Button
        full
        label={getTranslation("629")}
        onclick={handleSaveButtonClick}
        disabled={isDisabled ? true : isSending ? "pending" : false}
      />
    </Container>
  );
};

export default Bank;
