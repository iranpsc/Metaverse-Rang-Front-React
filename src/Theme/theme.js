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
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  bg: "#000",
  inputBgColor: "#282828",
  inputBorder: "#2C2C2C",
  inputLabelColor: "#858585",
  inputText: "white",
  placeholder: "#858585",
};
