import { Button, TextField, Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  handleChangeCallback(index: number): void;
}

const MotivationForm = ({ handleChangeCallback }: Props) => {
  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
      >
        <Box sx={{ m: 2 }}>
          <Typography style={{ fontSize: 25, textAlign: "center" }}>
            Why do you want to join CodeCell, and why should we choose you?
          </Typography>
          <Typography style={{ marginTop: 10, textAlign: "center" }}>
            Please note that we regard a well-written letter of motivation very
            highly when reviewing applications.
          </Typography>
        </Box>
        <TextField label="Multiline" multiline minRows={5} />
      </Box>
      <Button onClick={() => handleChangeCallback(1)}>Prev</Button>
    </div>
  );
};

export default MotivationForm;
