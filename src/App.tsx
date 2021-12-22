import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import FormContext from "./context/FormContext";
import FormBox from "./components/FormBox";
import { lightTheme } from "./theme/theme";

function App() {
  const formContext = React.useContext(FormContext);

  return (
    <ThemeProvider theme={lightTheme}>
      <FormContext.Provider value={formContext}>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormBox />
        </Box>
      </FormContext.Provider>
    </ThemeProvider>
  );
}

export default App;
