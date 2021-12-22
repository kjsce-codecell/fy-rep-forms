import { TextField, Box, Button } from "@mui/material";
import React from "react";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
}

const CvForm = ({ handleChangeCallback, setFormDataCallback }: Props) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: { lg: "35ch", xs: "100%", md: "35ch" },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={false}
          label="Resume*"
          helperText="Google Drive - Public link"
        />
        <TextField
          error={false}
          label="Cover Letter*"
          helperText="Google Drive - Public link"
        />
      </div>
      <div>
        <TextField error={false} label="GitHub Profile" helperText="Optional" />
        <TextField
          error={false}
          label="LinkedIn Profile"
          helperText="Optional"
        />
      </div>
      <Box sx={{ float: "right" }}>
        <Button onClick={() => handleChangeCallback(0)}>Previous</Button>
        <Button onClick={() => handleChangeCallback(2)} variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CvForm;
