import { createTheme } from "@mui/material";

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
    fontFamily: "Nunito",
  },
});
export const darkTheme = createTheme({
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
    fontFamily: "Nunito",
  },
});
