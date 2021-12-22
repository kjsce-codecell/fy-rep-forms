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
      <video autoPlay loop id="vid"> <source src="assets/logos/bg.mp4" type="video/mp4"/>  </video>
      <Box
        sx={{
          padding: { lg: 2, md: 2, sm: 2 },
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: 'url("../public/assets/logos/bg.mp4")',
        
        }}
      >
        <FormBox />
      </Box>
    </ThemeProvider>
  );
}

export default App;
