import { createTheme } from "@mui/material";

export const customColors = {
  outerBg: "#121212",
  innerBg: "#272727",
  stepperColor:
    "linear-gradient(90deg, hsla(210, 29%, 24%, 1) 0%, hsla(204, 64%, 44%, 1) 100%);",
  stepperLine: "pink",
};

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(41, 128, 185)",
    },
    secondary: {
      main: "#84c9fb",
    },
    success: {
      main: "rgb(0,163,0)",
    },
    text: {
      primary: "#84c9fb",
      secondary: "#84c9fb",
    },
  },

  typography: {
    fontFamily: "Roboto",
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(238,146,12)",
    },
    secondary: {
      main: "rgb(0,163,0)",
    },
    success: {
      main: "rgb(0,163,0)",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
  },

  typography: {
    fontFamily: "Roboto",
  },
});
