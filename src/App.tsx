import React from "react";
import { Box } from "@mui/material";
import Example from "./components/Example";
import Stepper from "./components/Stepper";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stepper />
      <Example />
    </Box>
  );
}

export default App;
