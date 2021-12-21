import React from "react";
import { Box } from "@mui/material";
import Example from "./components/Example";

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
      <Example />
    </Box>
  );
}

export default App;
