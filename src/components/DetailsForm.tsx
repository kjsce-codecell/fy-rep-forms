import { TextField, Box, Autocomplete } from "@mui/material";
import React from "react";

interface Props {}

const branches = ["COMPS", "IT", "Electronics", "EXTC", "MECH"];

const DetailsForm = (props: Props) => {
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
        <TextField error={false} label="Name" />
        <TextField error={false} label="Email" helperText="Incorrect entry." />
      </div>
      <Box sx={{ display: "flex" }}>
        <TextField error={false} label="Mobile Number" />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={branches}
          renderInput={(params) => <TextField {...params} label="Branch" />}
        />
      </Box>
    </Box>
  );
};

export default DetailsForm;
