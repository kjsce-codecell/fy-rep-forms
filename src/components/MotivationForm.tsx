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
  colors,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { POST } from "../api/post";
import { FormDataType } from "../types/FormData";
// @ts-ignore
import Lottie from "react-lottie";
import successAnimationData from "../animations/party.json";
import errorAnimationData from "../animations/error.json";
import InfoIcon from "@mui/icons-material/Info";

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
    if (motivationRef.current!.value.length < 100) {
      setMotivationError(true);
      return;
    }
    setFormDataCallback({ q1: motivationRef.current?.value });

    setSuccess(true);
    setFeedBackText({
      heading: "Applied Sucessfully",
      content: "Your application has been submitted",
    });
    handleOpenModal();
    return;

    if (!formData) return;
    POST({ ...formData }).then((res) => {
      if (res === "Yayay") {
        console.log("yayayayayay");
      } else if (res === "Email already exists.") {
        setSuccess(false);
        setFeedBackText({
          heading: "Failed to submit",
          content: "An application has already been submitted for this email",
        });
        handleOpenModal();
      } else {
        setSuccess(false);
        setFeedBackText({
          heading: "Failed to submit",
          content: "Something went wrong",
        });
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
          <Typography
            style={{
              marginTop: 8,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              color: colors.cyan[900],
            }}
          >
            <InfoIcon style={{ fontSize: 24, margin: 5 }} />
            We regard a well-written letter of motivation very highly when
            reviewing applications.
          </Typography>
        </Box>
        <TextField
          multiline
          minRows={5}
          inputRef={motivationRef}
          error={motivationError ? true : false}
          helperText={motivationError ? "Minimum 100 characters required" : ""}
          defaultValue={formData?.q1}
        />
      </Box>
      <Box sx={{ float: "right", mt: 3 }}>
        <Button
          onClick={() => handleChangeCallback(1)}
          style={{ marginRight: 10 }}
        >
          Previous
        </Button>
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
          <br />
          <DialogContentText
            style={{
              textAlign: "center",
            }}
          >
            {success && "Made with ❤️ by CodeCell"}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Button
            onClick={handleCloseModal}
            autoFocus
            style={{ width: "100%" }}
            variant="contained"
          >
            NOICE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MotivationForm;
