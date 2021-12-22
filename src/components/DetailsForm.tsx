import {
  TextField,
  Box,
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Button,
} from "@mui/material";
import { error } from "console";
import React from "react";

interface Props {
  handleChangeCallback(index: number): void;
}

const branches = ["COMPS", "IT", "Electronics", "EXTC", "MECH"];

const DetailsForm = ({ handleChangeCallback }: Props) => {
  const [state, setState] = React.useState({
    TechnicalTeam: false,
    PublicRelationsTeam: false,
    CreativeTeam: false,
    Coordinator: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Coordinator, CreativeTeam, PublicRelationsTeam, TechnicalTeam } =
    state;
  const error =
    [Coordinator, CreativeTeam, PublicRelationsTeam, TechnicalTeam].filter(
      (v) => v
    ).length > 3;

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
      <div>
        <Box
          sx={{
            md: { display: "flex" },
            sm: { display: "flex" },
            lg: { display: "flex" },
          }}
        >
          <TextField error={false} label="Mobile Number" />
          <Autocomplete
            // disablePortal
            options={branches}
            renderInput={(params) => <TextField {...params} label="Branch" />}
          />
        </Box>
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Position Preference</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Coordinator}
                  onChange={handleChange}
                  name="Coordinator"
                />
              }
              label="Coordinator"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={CreativeTeam}
                  onChange={handleChange}
                  name="CreativeTeam"
                />
              }
              label="Creative Team"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={PublicRelationsTeam}
                  onChange={handleChange}
                  name="PublicRelationsTeam"
                />
              }
              label="Public Relations Team"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={TechnicalTeam}
                  onChange={handleChange}
                  name="TechnicalTeam"
                />
              }
              label="Technical Team"
            />
          </FormGroup>
          <FormHelperText>At Most 3</FormHelperText>
        </FormControl>
      </div>
      <Button onClick={() => handleChangeCallback(1)}>Next</Button>
    </Box>
  );
};

export default DetailsForm;
