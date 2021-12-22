import { createTheme } from "@mui/material";

export const customColors = {
  outerBg: "linear-gradient(to right, #9d50bb, #6e48aa);",
  innerBg: "#edebf2",
  stepperColor: " linear-gradient(to right, #6441a5, #2a0845); ",
  stepperLine: "lightgrey",
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
      primary: "#6441A5",
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
      main: "#6441A5",
    },
    secondary: {
      main: "#6441A5",
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
