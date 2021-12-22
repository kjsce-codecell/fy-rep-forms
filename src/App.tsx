import React from "react";
import { Box } from "@mui/material";
import Example from "./components/Example";
import FormContext from "./context/FormContext";

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
        <Example />
      </Box>
    </FormContext.Provider>
  );
}

export default App;
