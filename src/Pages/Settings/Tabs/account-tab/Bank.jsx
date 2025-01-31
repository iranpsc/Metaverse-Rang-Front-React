import { IoCardOutline } from "react-icons/io5";

import styled from "styled-components";
import { toast } from "react-toastify";
import { useState } from "react";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../../Services/Utility";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../Services/Hooks/useRequest";

const Select = styled.select`
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  width: 100%;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 0 10px;
  border: 1px solid #454545;
  margin-top: 30px;
  margin-bottom: 20px;
  option {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
// const Title = styled.div`
//   color: #353535;
//   font-size: 16px;
//   font-weight: 600;
// `;
const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
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
    font-size: 12px;
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
  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState(items_info);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
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
          if (error.response.status === 410) {
            ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
            return Navigate("/metaverse/confirmation");
          } else {
            ToastError(error.response.data.message);
          }
        });
    }
  };

  return (
    <Container>
      <Title title={getFieldTranslationByNames("635")} />
      <Select onChange={handleSelectChange} value={selectedValue}>
        <option value="">{getFieldTranslationByNames("636")}</option>
        {options.map((item) => (
          <option value={item.label} key={item.id}>
            <IoCardOutline />
            <span>{item.label}</span>
          </option>
        ))}
      </Select>
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
