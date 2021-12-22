import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import FormBox from "./components/FormBox";
import { customColors, darkTheme, lightTheme } from "./theme/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    if (theme == darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: customColors.outerBg,
        }}
      >
        <FormBox />
      </Box>
    </ThemeProvider>
  );
}

export default App;
