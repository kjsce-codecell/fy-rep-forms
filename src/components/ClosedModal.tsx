import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import closedAnimationData from "../animations/closed.json";
// @ts-ignore
import Lottie from "react-lottie";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function ClosedModal() {
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    // localStorage.setItem("CodecellApplyWelcomeModal", "true");
    // setOpen(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: closedAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Lottie options={defaultOptions} height={400} />
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography
            style={{ fontSize: 30, textAlign: "center" }}
            gutterBottom
          >
            Whoops!
          </Typography>
          <Typography
            style={{ fontSize: 15, textAlign: "center" }}
            gutterBottom
          >
            We are no longer accepting responses, we'll be back soon :)
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
