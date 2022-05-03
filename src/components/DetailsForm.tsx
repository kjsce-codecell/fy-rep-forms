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
  ButtonGroup,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useRef, useState } from "react";
import { FormDataType } from "../types/FormData";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
  formData: FormDataType | undefined;
}

const branches = ["COMPS", "IT", "Electronics", "EXTC", "MECH"];

const DetailsForm = ({
  handleChangeCallback,
  setFormDataCallback,
  formData,
}: Props) => {
  const getState = () => {
    if (formData?.positions && formData?.positions?.length > 0)
      return {
        TechnicalTeam: formData?.positions?.includes("TechnicalTeam")
          ? true
          : false,
        CreativeTeam: formData?.positions?.includes("CreativeTeam")
          ? true
          : false,
        Coordinator: formData?.positions?.includes("Coordinator")
          ? true
          : false,
      };
    else {
      return {
        TechnicalTeam: false,
        CreativeTeam: false,
        Coordinator: false,
      };
    }
  };
  const [state, setState] = React.useState(getState());
  const theme = useTheme();

  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [branchError, setBranchError] = useState<boolean>(false);
  const [positionError, setPositionError] = useState<boolean>(false);

  const [selectedBtn, setSelectedBtn] = React.useState("SY");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const branchRef = useRef<HTMLInputElement>(null);

  var isNumber = function (ch: string) {
    for (let i of ch) {
      if (isNumber2(i)) {
        return true;
      }
    }
    return false;
  };

  function isNumber2(n: any) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }

  const checkAndNext = () => {
    let errorCount = 0;
    if (nameRef.current!.value.length < 2 || isNumber(nameRef.current!.value)) {
      setNameError(true);
      console.log("Is this even your name?");
      errorCount++;
    }
    if (phoneRef.current!.value.length != 10) {
      setPhoneError(true);
      console.log("Is this even your phone?");
      errorCount++;
    }
    if (
      !emailRef.current!.value.includes("@") ||
      emailRef.current!.value.indexOf("@") === 0 ||
      !emailRef.current!.value.includes(".")
    ) {
      setEmailError(true);
      console.log("Is this even your email?");
      errorCount++;
    }
    if (branchRef.current!.value.length === 0) {
      setBranchError(true);
      errorCount++;
    }
    if (positionPrefError()) {
      setPositionError(true);
      errorCount++;
    }
    if (errorCount === 0) {
      handleCallbacks();
    }
  };

  const positionStateToArray = () => {
    const arr = [];
    for (var key in state) {
      if (state.hasOwnProperty(key)) {
        // @ts-ignore
        if (state[key] == true) arr.push(key);
      }
    }
    return arr;
  };

  const handleCallbacks = () => {
    setFormDataCallback({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      branch: branchRef.current?.value,
      positions: positionStateToArray(),
    });
    handleChangeCallback(1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Coordinator, CreativeTeam, TechnicalTeam } = state;

  const positionPrefError = () => {
    return (
      [Coordinator, CreativeTeam, TechnicalTeam].filter((v) => v).length < 2
    );
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: { lg: "40ch", xs: "100%", md: "35ch" },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={nameError ? true : false}
          label="Name"
          required
          inputRef={nameRef}
          helperText={nameError ? "Enter a valid name" : ""}
          defaultValue={formData?.name}
        />
        <TextField
          error={emailError ? true : false}
          label="Email"
          required
          helperText={emailError ? "Enter a valid email" : ""}
          inputRef={emailRef}
          defaultValue={formData?.email}
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
            required
            inputRef={phoneRef}
            helperText={phoneError ? "Enter a valid number" : ""}
            defaultValue={formData?.phone}
          />
          <Autocomplete
            // disablePortal
            options={branches}
            defaultValue={formData?.branch}
            renderInput={(params) => (
              <TextField
                {...params}
                error={branchError ? true : false}
                inputRef={branchRef}
                label="Branch"
                required
                helperText={branchError ? "Select your branch" : ""}
              />
            )}
          />
        </Box>
        <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
          <FormLabel component="legend">I am an incoming</FormLabel>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button
              variant={selectedBtn === "SY" ? "contained" : "outlined"}
              onClick={() => setSelectedBtn("SY")}
            >
              SY
            </Button>
            <Button
              variant={selectedBtn === "TY" ? "contained" : "outlined"}
              onClick={() => setSelectedBtn("TY")}
            >
              TY
            </Button>
          </ButtonGroup>
        </FormControl>
        <FormControl
          required
          error={positionError}
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
          <FormHelperText>Select At Least 2</FormHelperText>
        </FormControl>
      </div>
      <Box sx={{ float: "right" }}>
        <Button onClick={() => checkAndNext()} variant="contained">
          Save and Next
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsForm;
