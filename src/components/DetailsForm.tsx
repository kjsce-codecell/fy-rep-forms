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
import PositionPrefrenceSy from "./PositionPrefrence/PositionPrefrenceSy";
import PositionPrefrenceTy from "./PositionPrefrence/PositionPrefrenceTy";

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
  const theme = useTheme();

  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [branchError, setBranchError] = useState<boolean>(false);
  const [positionError, setPositionError] = useState<boolean>(false);

  const [selectedBtn, setSelectedBtn] = React.useState("SY");

  const [positions, setPositions] = useState<string[]>([]);

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
    console.log(positions);

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

  const handleCallbacks = () => {
    setFormDataCallback({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      branch: branchRef.current?.value,
      positions: positions,
    });
    handleChangeCallback(1);
  };

  const positionPrefError = () => {
    return positions.filter((v) => v).length < 2;
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
        {selectedBtn === "SY" ? (
          <PositionPrefrenceSy
            formData={formData}
            positionError={positionError}
            setPositions={setPositions}
          />
        ) : (
          <PositionPrefrenceTy
            formData={formData}
            positionError={positionError}
            setPositions={setPositions}
          />
        )}
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
