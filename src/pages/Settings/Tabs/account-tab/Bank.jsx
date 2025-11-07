import { IoCardOutline } from "react-icons/io5";
import Dropdown from "../../../../components/Common/Dropdown";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useState } from "react";
import Title from "../../../../components/Title";
import Button from "../../../../components/Button";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../../services/Utility";
import { useNavigate } from "react-router-dom";
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

const items_info = [
  {
    id: 1,
    translationId: "637",
    value: "",
    name: "checkout_days_count",
  },
  {
    id: 2,
    translationId: "638",
    value: "",
    name: "automatic_logout",
  },
];

const options = [
  { id: 1, label: "IR-125478963258745896324587" },
  { id: 2, label: "IR-125478963258745896324587" },
];
const Bank = () => {
  const [selectedValue, setSelectedValue] = useState(""); // فقط value
  const [items, setItems] = useState(items_info);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();

  const handleSelectChange = (value) => {
    setSelectedValue(value); // مقدار انتخاب شده رو ذخیره می‌کنیم
  };

  const handleInputChange = (e, itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? { ...item, value: e.target.value, error: false }
        : item
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
        ToastError("خروج اتوماتیک باید بیشتر از 1 دقیقه باشد.");
      } else if (item.name === "automatic_logout" && item.value > 55) {
        hasError = true;
        item.error = true;
        ToastError("خروج اتوماتیک باید کمتر از 55 دقیقه باشد.");
      } else if (item.name === "checkout_days_count" && item.value < 3) {
        hasError = true;
        item.error = true;
        ToastError("واریز اتوماتیک باید بیشتر از 3 روز باشد.");
      } else if (item.name === "checkout_days_count" && item.value > 1000) {
        hasError = true;
        item.error = true;
        ToastError("واریز اتوماتیک باید کمتر از 1000 روز باشد.");
      } else {
        item.error = false;
      }
    });

    setItems([...items]);

    if (!hasError) {
      const formData = items.reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

      Request("settings", HTTP_METHOD.POST, formData)
        .then((response) => {
          ToastSuccess("متغییر های الزامی با موفقیت بروزرسانی شد.");
          const resetItems = items.map((item) => ({ ...item, value: "" }));
          setItems(resetItems);
        })
        .catch((error) => {
          ToastError(error.response.data.message);
        });
    }
  };

  return (
    <Container>
      <Title title={getFieldTranslationByNames("635")} />

      <Dropdown
        options={options.map((item) => ({
          value: item.label,
          label: item.label,
        }))}
        selected={selectedValue}
        onSelect={handleSelectChange}
        placeholder={getFieldTranslationByNames("636")}
      />

      <Wrapper>
        {items.map((item) => (
          <Div error={item.error} id={item.id} key={item.id}>
            <span>{getFieldTranslationByNames(item.translationId)}</span>
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
        label={getFieldTranslationByNames("629")}
        onclick={handleSaveButtonClick}
      />
    </Container>
  );
};

export default Bank;
