import { TextField, Box } from "@mui/material";
import React from "react";

interface Props {}

const CvForm = (props: Props) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
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
    </Box>
  );
};

export default CvForm;
