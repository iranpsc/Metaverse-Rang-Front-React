import styled from "styled-components";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getFieldTranslationByNames } from "../../../services/Utility";

const On = styled.div`
  width: 45px;
  height: 25px;
  margin-top: 5px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 20px;
  padding: 0 1px;
  cursor: pointer;
  transition: all 0.2s linear;
  background-color: ${(props) =>
    props.off ? props.theme.colors.primary : "#cccccc"};
  div {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    transition: all 0.2s linear;
    left: ${(props) => (props.off ? "22.5px" : "1px")};
    background-color: ${(props) =>
      props.off ? props.theme.colors.newColors.otherColors.toggleBg : "white"};
  }
`;

const OnOff = ({ label, isOn, onToggle }) => {
  const [off, setOff] = useState(!isOn);

  useEffect(() => {
    setOff(!isOn);
  }, [isOn]);

  const handleClick = () => {
    const newValue = !off;
    setOff(newValue);
    onToggle(newValue);
    toast.success(
      `${getFieldTranslationByNames("setting", label)} با موفقیت ${
        newValue ? "خاموش" : "روشن"
      } شد!`,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        bodyClassName: "success",
      }
    );
  };

  return (
    <On off={off} onClick={handleClick}>
      <div></div>
    </On>
  );
};

export default OnOff;
