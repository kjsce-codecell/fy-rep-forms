import React from "react";
import { Box } from "@mui/material";
import FormContext from "./context/FormContext";
import FormBox from "./components/FormBox";

function App() {
  const formContext = React.useContext(FormContext);

  return (
    <FormContext.Provider value={formContext}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormBox />
      </Box>
    </FormContext.Provider>
  );
}

export default App;
