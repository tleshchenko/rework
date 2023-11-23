import { createTheme } from "@mui/material/styles";
import { createContext, useContext } from "react";
import { useColorTheme } from "./useColorTheme";

const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useThemeContext };