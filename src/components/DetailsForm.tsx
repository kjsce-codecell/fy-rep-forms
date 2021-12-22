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
import React, { useRef, useEffect, useState} from "react";
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

  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);



  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const checkAndNext = () => {
    if (nameRef.current!.value.length < 2) {
      setNameError(true);
      console.log("Is this even your name?");
      return;
    }
    if (phoneRef.current!.value.length != 10) {
      setPhoneError(true);
      console.log("Is this even your phone?");
      return;
    }
    if (!emailRef.current!.value.includes("@")) {
      setEmailError(true);
      console.log("Is this even your email?");
      return;
    }
    handleCallbacks();
  };


  const handleCallbacks = () => {
    setFormDataCallback({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      positions: state,
    });
    handleChangeCallback(1);
  };

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
          error={nameError ? true : false}
          label="Name"
          inputRef={nameRef}
          helperText={nameError ? "Enter a valid name" : ""}
        />
        <TextField
          error={false}
          label="Email"
          helperText="Incorrect entry."
          inputRef={emailRef}
          required
        />
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
          <TextField
            error={phoneError ? true : false}
            label="Mobile Number"
            inputRef={phoneRef}
            helperText={phoneError ? "error goes here" : ""}
          />
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
      <Box sx={{ float: "right" }}>
        <Button onClick={() => checkAndNext()} variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsForm;
