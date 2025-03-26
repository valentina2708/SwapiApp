import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#2C3E50",
    secondary: "#3498DB",
    background: "#FFFFFF",
    text: "#282828",
    accent: "#F39C12",

  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#2C3E50",
    secondary: "#3498DB",
    background: "#282828",
    text: "#FFFFFF",
    accent: "#F39C12",
  },
};
