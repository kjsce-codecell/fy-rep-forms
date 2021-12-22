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
  withTheme,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { darkTheme } from "../theme/theme";
// import {FormContext} from "../context/FormContext";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
}

const branches = ["COMPS", "IT", "Electronics", "EXTC", "MECH"];

const DetailsForm = ({ handleChangeCallback, setFormDataCallback }: Props) => {
  const [state, setState] = React.useState({
    TechnicalTeam: false,
    PublicRelationsTeam: false,
    CreativeTeam: false,
    Coordinator: false,
  });
  const theme = useTheme();

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
    ).length < 2;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
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
            display: {
              md: "flex",
              sm: "flex",
              lg: "flex",
            },
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
              style={{ color: theme.palette.text.primary }}
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
              style={{ color: theme.palette.text.primary }}
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
              style={{ color: theme.palette.text.primary }}
            />
          </FormGroup>
          <FormHelperText>At Least 2</FormHelperText>
        </FormControl>
      </div>
      <Button onClick={() => handleChangeCallback(1)}>Next</Button>
    </Box>
  );
};

export default DetailsForm;
