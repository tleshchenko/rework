import React from "react";
import { useState} from "react";
import { createTheme } from "@mui/material";
import { theme } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

     const modifiedTheme = React.useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode,
        },
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};