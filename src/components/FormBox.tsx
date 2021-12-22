import {
  Box,
  Stack,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CvForm from "./CvForm";
import DetailsForm from "./DetailsForm";
import MotivationForm from "./MotivationForm";
import { ColorlibConnector, ColorlibStepIcon, steps } from "./StepperUtils";

interface Props {}

const FormBox = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(2);

  const handleChange = (newValue: number) => {
    console.log(newValue);
    setActiveStep(newValue);
  };

  const renderForm = (param: number) => {
    switch (param) {
      case 0:
        return <DetailsForm />;
      case 1:
        return <CvForm />;
      case 2:
        return <MotivationForm />;
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      boxShadow={2}
      padding={4}
    >
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={() => handleChange(index)}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {renderForm(activeStep)}
    </Box>
  );
};

export default FormBox;
