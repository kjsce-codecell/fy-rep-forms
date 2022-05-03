import {
  Box,
  Stack,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { customColors } from "../theme/theme";
import { calculateDataLength } from "../utils/calculateDataLength";
import CvForm from "./CvForm";
import DetailsForm from "./DetailsForm";
import MotivationForm from "./MotivationForm";
import { ColorlibConnector, ColorlibStepIcon, steps } from "./StepperUtils";

interface Props {}

const FormBox = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState<number | undefined>();
  const [formData, setFormData] = React.useState<object | undefined>(undefined);
  const handleChange = (newValue: number) => {
    setActiveStep(newValue);
  };

  useEffect(() => {
    const lsData = localStorage.getItem("CodecellApplyFormData");
    if (lsData) {
      setFormData(JSON.parse(lsData));
      const dataLength = calculateDataLength(JSON.parse(lsData));
      if (dataLength < 5) {
        setActiveStep(0);
      } else if (dataLength >= 5 && dataLength < 8) {
        setActiveStep(1);
      } else if (dataLength >= 8) {
        setActiveStep(2);
      }
    } else {
      setActiveStep(0);
    }
  }, []);

  useEffect(() => {
    if (formData != undefined) {
      localStorage.setItem("CodecellApplyFormData", JSON.stringify(formData));
    }

    return () => {};
  }, [formData]);

  const handleFormData = (newValue: any) => {
    setFormData((prev) => ({ ...prev, ...newValue }));
  };

  const renderForm = (param: number) => {
    switch (param) {
      case 0:
        return (
          <DetailsForm
            handleChangeCallback={handleChange}
            setFormDataCallback={handleFormData}
            formData={formData}
          />
        );
      case 1:
        return (
          <CvForm
            handleChangeCallback={handleChange}
            setFormDataCallback={handleFormData}
            formData={formData}
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
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img
          src="/assets/logos/cropbgpurple.png"
          height={75}
          alt="KJSCE CodeCell"
        />
        <Typography style={{ fontSize: 24, marginBlock: 10 }}>
          Council Application For The Year 2022-23
        </Typography>
      </Box>
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
      {activeStep !== undefined ? renderForm(activeStep) : <></>}
    </Box>
  );
};

export default FormBox;
