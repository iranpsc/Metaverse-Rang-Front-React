import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  bg: "#F9F9F9",
  inputBgColor: "#FCFCFC",
  inputBorder: "#DADADA",
  inputLabelColor: "#BABABA",
  inputText: "black",
  placeholder: "#BABABA",
  checkBoxLabel: "rgba(0, 0, 0, 0.45)",
  btnPrimary: "#008BF8",
  btnPrimaryTextColor: "#D4ECFF",
  btnScenery: "#D4ECFF",
  btnSceneryTextColor: "#008BF8",
  headerIconFill: "#E9E9E9",
  headerIconStroke: "#353535",
  btnSubmitBgColor: "#D7FBF0",
  btnSubmitTextColor: "#18C08F",
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  bg: "#000",
  inputBgColor: "#282828",
  inputBorder: "#2C2C2C",
  inputLabelColor: "#858585",
  inputText: "#E1E1E1",
  placeholder: "#858585",
  checkBoxLabel: "#E1E1E1",
  btnPrimary: "#FFC700",
  btnPrimaryTextColor: "#000000",
  btnScenery: "#332800",
  btnSceneryTextColor: "#FFC700",
  headerIconFill: "#3B3B3B",
  headerIconStroke: "#949494",
  btnSubmitBgColor: "#004531",
  btnSubmitTextColor: "#18C08F",
};
