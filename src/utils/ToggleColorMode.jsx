import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "EmberCondensed",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
