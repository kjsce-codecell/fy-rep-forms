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
  // const [linkedInError, setLinkedInError] = useState<boolean>(false);
  // const [githubError, setGithubError] = useState<boolean>(false);

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
    if (jump == 0) {
      handleChangeCallback(0);
      updateCallback();
      return;
    }

    if (!resumeRef.current!.value.includes(".com")) {
      setResumeError(true);
      console.log("Enter a valid link for resume");
      return;
    }
    if (!coverRef.current!.value.includes(".com")) {
      setCoverError(true);
      console.log("Enter a valid link for cover");
      return;
    }
    if (!codechefRef.current!.value.includes(".com")) {
      setCodechefError(true);
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
          error={false}
          label="GitHub Profile"
          defaultValue={formData?.github}
          inputRef={githubRef}
        />
        <TextField
          error={false}
          label="LinkedIn Profile"
          defaultValue={formData?.linkedin}
          inputRef={linkedInRef}
        />
      </div>
      <div>
        <TextField
          error={codechefError ? true : false}
          label="CodeChef Profile"
          helperText={codechefError ? "Enter a valid Codechef Profile" : ""}
          defaultValue={formData?.codechef}
          inputRef={codechefRef}
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
