import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 10px;
  background-color: #000;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #1a1a18;
  color: #f8f8f8;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  gap: 5px;
`;
const ThemesBtn = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <Container>
      <Btn onClick={toggleTheme}>تیره</Btn>
      <Btn onClick={toggleTheme}>روشن</Btn>
    </Container>
  );
};

export default ThemesBtn;
