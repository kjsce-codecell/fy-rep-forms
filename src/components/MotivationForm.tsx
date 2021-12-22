import {
  Button,
  TextField,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useState, useRef } from "react";
import { POST } from "../api/post";
import { FormDataType } from "../types/FormData";
// @ts-ignore
import Lottie from "react-lottie";
import successAnimationData from "../animations/party.json";
import errorAnimationData from "../animations/error.json";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
  formData: FormDataType | undefined;
}

const MotivationForm = ({
  handleChangeCallback,
  setFormDataCallback,
  formData,
}: Props) => {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [feedBackText, setFeedBackText] = useState({
    heading: "",
    content: "",
  });
  const motivationRef = useRef<HTMLInputElement>(null);
  const [motivationError, setMotivationError] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (motivationRef.current!.value.length === 0) {
      setMotivationError(true);
      return;
    }

    // test
    setFormDataCallback({ q1: motivationRef.current?.value });
    setSuccess(false);
    setFeedBackText({
      heading: "Whoops!",
      content: "Error hua kuch to :(",
    });
    handleOpenModal();
    // end test

    if (!formData) return;
    POST({ ...formData }).then((res) => {
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

  const commonOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const successOptions = {
    animationData: successAnimationData,
    ...commonOptions,
  };
  const errorOptions = {
    animationData: errorAnimationData,
    ...commonOptions,
  };

  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
      >
        <Box sx={{ m: 2 }}>
          <Typography style={{ fontSize: 22, textAlign: "center" }}>
            Why do you want to join CodeCell, and why should we choose you?
          </Typography>
          <Typography style={{ marginTop: 8, textAlign: "center" }}>
            Please note that we regard a well-written letter of motivation very
            highly when reviewing applications.
          </Typography>
        </Box>
        <TextField
          multiline
          minRows={5}
          inputRef={motivationRef}
          error={motivationError ? true : false}
          helperText={motivationError ? "This is a required field" : ""}
          defaultValue={formData?.q1}
        />
      </Box>
      <Box sx={{ float: "right" }}>
        <Button onClick={() => handleChangeCallback(1)}>Previous</Button>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle
          style={{
            textAlign: "center",
          }}
        >
          <Lottie options={success ? successOptions : errorOptions} />
          {feedBackText.heading}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              textAlign: "center",
            }}
          >
            {feedBackText.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Button onClick={handleCloseModal} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MotivationForm;
