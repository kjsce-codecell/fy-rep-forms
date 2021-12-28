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
import loadingAnimationData from "../animations/loading.json";
import InfoIcon from "@mui/icons-material/Info";
import firebase from "firebase/compat/app";

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
  const [success, setSuccess] = useState(0);
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
    if (motivationRef.current!.value.trim().length < 50) {
      setMotivationError(true);
      return;
    }
    setFormDataCallback({ q1: motivationRef.current?.value });

    setSuccess(0);
    handleOpenModal();
    setFeedBackText({
      heading: "",
      content: "Please wait while we are processing your application",
    });

    POST(motivationRef.current?.value as string, { ...formData }).then(
      (res) => {
        console.log(res);
        if (res === "Yayay") {
          console.log("yayayayayay");
          setTimeout(() => {
            setSuccess(1);
            setFeedBackText({
              heading: "Applied Sucessfully",
              content: "Your application has been submitted",
            });
          }, 1000);
          handleOpenModal();
        } else if (res === "email-exists") {
          setTimeout(() => {
            setSuccess(-1);
            setFeedBackText({
              heading: "Failed to submit",
              content:
                "An application has already been submitted for this email",
            });
          }, 1000);
          handleOpenModal();
        } else if (res === "failed!") {
          setTimeout(() => {
            setSuccess(-1);
            setFeedBackText({
              heading: "Failed to submit",
              content: "Something went wrong",
            });
          }, 1000);
        }
      }
    );
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
  const loadingOptions = {
    animationData: loadingAnimationData,
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
          helperText={motivationError ? "Atleast 50 characters required" : ""}
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
          <Lottie
            options={
              success == 1
                ? successOptions
                : success == -1
                ? errorOptions
                : loadingOptions
            }
          />
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
            {"Made with ❤️ by CodeCell"}
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
            {success == 1 ? "Noice" : "Try again"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MotivationForm;
