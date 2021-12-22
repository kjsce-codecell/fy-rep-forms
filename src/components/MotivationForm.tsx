import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { POST } from "../api/post";
import FormContext from "../context/FormContext";

interface Props {
  handleChangeCallback(index: number): void;
}

const MotivationForm = ({ handleChangeCallback }: Props) => {
  const formData = useContext(FormContext);

  const handleSubmit = () => {
    POST({ email: formData?.email, ...formData }).then((res) => {
      if (res === "Yayay") {
        console.info(
          "Registered Sucessfully",
          "Your application has been submitted",
          "success"
        );
      } else if (res === "Email already exists.") {
        console.info(
          "Failed to submit",
          "An application has already been submitted for this email",
          "error"
        );
      } else {
        console.info("Failed to submit", "Something went wrong", "error");
      }
    });
  };

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
      <Button onClick={handleSubmit}>Prev</Button>
    </div>
  );
};

export default MotivationForm;
