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
  const codechefRef = useRef<HTMLInputElement>(null);

  const [resumeError, setResumeError] = useState<boolean>(false);
  const [coverError, setCoverError] = useState<boolean>(false);
  const [codechefError, setCodechefError] = useState<boolean>(false);
  const [linkedInError, setLinkedInError] = useState<boolean>(false);
  const [githubError, setGithubError] = useState<boolean>(false);

  const updateCallback = () => {
    setFormDataCallback({
      resume: resumeRef.current?.value,
      cover: coverRef.current?.value,
      linkedin: linkedInRef.current?.value,
      github: githubRef.current?.value,
      codechef: codechefRef.current?.value,
    });
  };
  const handleCallbacks = (jump: number) => {
    let errorCount = 0;
    if (jump == 0) {
      handleChangeCallback(0);
      updateCallback();
      return;
    }

    if (!resumeRef.current!.value.includes("google.com")) {
      setResumeError(true);
      console.log("Enter a valid link for resume");
      errorCount++;
    }
    if (!coverRef.current!.value.includes("google.com")) {
      setCoverError(true);
      console.log("Enter a valid link for cover");
      errorCount++;
    }
    if (!linkedInRef.current!.value.includes("linkedin.com")) {
      setLinkedInError(true);
      console.log("Enter a valid link for linkedIn profile");
      errorCount++;
    }
    if (!githubRef.current!.value.includes("github.com")) {
      setGithubError(true);
      console.log("Enter a valid link for github");
      errorCount++;
    }
    if (!codechefRef.current!.value.includes("codechef.com")) {
      setCodechefError(true);
      errorCount++;
    }
    if (errorCount > 0) {
      return;
    }

    setFormDataCallback({
      resume: resumeRef.current?.value,
      cover: coverRef.current?.value,
      linkedin: linkedInRef.current?.value,
      codechef: codechefRef.current?.value,
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
          width: { lg: "40ch", xs: "100%", md: "35ch" },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={resumeError ? true : false}
          label="Resume"
          required
          helperText={
            resumeError
              ? "Enter a google drive link for resume"
              : "Google Drive - Public link"
          }
          inputRef={resumeRef}
          defaultValue={formData?.resume}
        />
        <TextField
          error={coverError ? true : false}
          label="Cover Letter"
          required
          helperText={
            coverError
              ? "Enter a google drive link for cover letter"
              : "Google Drive - Public link"
          }
          inputRef={coverRef}
          defaultValue={formData?.cover}
        />
      </div>
      <div>
        <TextField
          error={githubError}
          label="GitHub Profile"
          defaultValue={formData?.github}
          helperText={githubError ? "Enter your github profile link" : ""}
          inputRef={githubRef}
          required
        />
        <TextField
          error={linkedInError}
          label="LinkedIn Profile"
          defaultValue={formData?.linkedin}
          helperText={linkedInError ? "Enter your linkedIn profile link" : ""}
          inputRef={linkedInRef}
          required
        />
      </div>
      <div>
        <TextField
          error={codechefError ? true : false}
          label="CodeChef Profile"
          helperText={codechefError ? "Enter a valid Codechef Profile" : ""}
          defaultValue={formData?.codechef}
          inputRef={codechefRef}
          required
        />
      </div>
      <Box sx={{ float: "right", mt: 3 }}>
        <Button onClick={() => handleCallbacks(0)} style={{ marginRight: 10 }}>
          Previous
        </Button>
        <Button onClick={() => handleCallbacks(1)} variant="contained">
          Save And Next
        </Button>
      </Box>
    </Box>
  );
};

export default CvForm;
