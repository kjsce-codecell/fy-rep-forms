import { Preview } from "@mui/icons-material";
import {
  Box,
  Button,
  colors,
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
import { customColors } from "../theme/theme";
import { FormDataType } from "../types/FormData";
import CvForm from "./CvForm";
import DetailsForm from "./DetailsForm";
import MotivationForm from "./MotivationForm";
import { ColorlibConnector, ColorlibStepIcon, steps } from "./StepperUtils";

interface Props {}

const FormBox = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(2);
  const [formData, setFormData] = React.useState<object | undefined>(
    undefined
  );
  const handleChange = (newValue: number) => {
    console.log(newValue);
    setActiveStep(newValue);
  };

  const handleFormData = (newValue: any) => {
    console.log(newValue);
    setFormData((prev) => ({...prev, newValue}));
  };

  const renderForm = (param: number) => {
    switch (param) {
      case 0:
        return (
          <DetailsForm
            handleChangeCallback={handleChange}
            setFormDataCallback={handleFormData}
          />
        );
      case 1:
        return (
          <CvForm
            handleChangeCallback={handleChange}
            setFormDataCallback={handleFormData}
          />
        );
      case 2:
        return (
          <MotivationForm
            handleChangeCallback={handleChange}
            setFormDataCallback={handleFormData}
            formData={formData}
          />
        );
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      boxShadow={2}
      padding={4}
      sx={{ background: customColors.innerBg }}
    >
      <Stack sx={{ width: "100%", mb: 3 }} spacing={4}>
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
