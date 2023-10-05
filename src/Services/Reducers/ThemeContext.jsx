import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../Theme/theme";

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderContext");
  }
  return context;
}

export function ThemeProviderContext({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
