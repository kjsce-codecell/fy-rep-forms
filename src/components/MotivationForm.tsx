import { Button } from "@mui/material";
import React from "react";

interface Props {
  handleChangeCallback(index: number): void;
}

const MotivationForm = ({ handleChangeCallback }: Props) => {
  return (
    <div>
      Motivation
      <Button onClick={() => handleChangeCallback(1)}>Prev</Button>
    </div>
  );
};

export default MotivationForm;
