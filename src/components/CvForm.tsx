import { TextField, Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { FormDataType } from "../types/FormData";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
  formData: FormDataType | undefined;
}

const CvForm = ({
  handleChangeCallback,
  setFormDataCallback,
  formData,
}: Props) => {
  const resumeRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const linkedInRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

  const [resumeError, setResumeError] = useState<boolean>(false);
  const [coverError, setCoverError] = useState<boolean>(false);
  const [linkedInError, setLinkedInError] = useState<boolean>(false);
  const [githubError, setGithubError] = useState<boolean>(false);

  const updateCallback = () => {
    setFormDataCallback({
      resume: resumeRef.current?.value,
      cover: coverRef.current?.value,
      linkedin: linkedInRef.current?.value,
      github: githubRef.current?.value,
    });
  };
  const handleCallbacks = (jump: number) => {
    if (jump == 0) {
      handleChangeCallback(0);
      updateCallback();
      return;
    }

    if (!resumeRef.current!.value.includes("https://")) {
      setResumeError(true);
      console.log("Enter a valid link for resume");
      return;
    }
    if (!coverRef.current!.value.includes("https://")) {
      setCoverError(true);
      console.log("Enter a valid link for cover");
      return;
    }
    // if (!linkedInRef.current!.value.includes("https://")) {
    //   setLinkedInError(true);
    //   console.log("Enter a valid link for linkedIn profile");
    //   return;
    // }
    // if (!githubRef.current!.value.includes("https://")) {
    //   setGithubError(true);
    //   console.log("Enter a valid link for github");
    //   return;
    // }

    setFormDataCallback({
      resume: resumeRef.current?.value,
      cover: coverRef.current?.value,
      linkedin: linkedInRef.current?.value,
      github: githubRef.current?.value,
    });
    handleChangeCallback(2);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: { lg: "35ch", xs: "100%", md: "35ch" },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={resumeError ? true : false}
          label="Resume*"
          helperText={resumeError ? "Enter a valid link for resume" : ""}
          inputRef={resumeRef}
          defaultValue={formData?.resume}
        />
        <TextField
          error={coverError ? true : false}
          label="Cover Letter*"
          helperText={coverError ? "Enter a valid link for cover letter" : ""}
          inputRef={coverRef}
          defaultValue={formData?.cover}
        />
      </div>
      <div>
        <TextField
          error={false}
          label="GitHub Profile"
          helperText={""}
          defaultValue={formData?.github}
          inputRef={githubRef}
        />
        <TextField
          error={false}
          label="LinkedIn Profile"
          helperText={""}
          defaultValue={formData?.linkedin}
          inputRef={linkedInRef}
        />
      </div>
      <Box sx={{ float: "right" }}>
        <Button onClick={() => handleCallbacks(0)}>Previous</Button>
        <Button onClick={() => handleCallbacks(1)} variant="contained">
          Save And Next
        </Button>
      </Box>
    </Box>
  );
};

export default CvForm;
