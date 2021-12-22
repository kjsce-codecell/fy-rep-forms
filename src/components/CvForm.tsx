import { TextField, Box, Button } from "@mui/material";
import React, {useRef} from "react";

interface Props {
  handleChangeCallback(index: number): void;
  setFormDataCallback(object: any): void;
}

const CvForm = ({ handleChangeCallback, setFormDataCallback }: Props) => {

  const resumeRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const linkedInRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

 
  const handleCallbacks = (jump: number) => {
    if (jump == 0){
      handleChangeCallback(0);
    }
    handleChangeCallback(1);
    setFormDataCallback({
      resume: resumeRef.current?.value,
      cover: coverRef.current?.value,
      linkedin: linkedInRef.current?.value,
      github: githubRef.current?.value,
    });

  }

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
          error={false}
          label="Resume*"
          helperText="Google Drive - Public link"
          inputRef={resumeRef}
        />
        <TextField
          error={false}
          label="Cover Letter*"
          helperText="Google Drive - Public link"
          inputRef={coverRef}
        />
      </div>
      <div>
        <TextField error={false} label="GitHub Profile" helperText="Optional" inputRef={githubRef}/>
        <TextField
          error={false}
          label="LinkedIn Profile"
          helperText="Optional"
          inputRef={linkedInRef}
        />
      </div>
      <Box sx={{ float: "right" }}>
        <Button onClick={() => handleCallbacks(0)}>Previous</Button>
        <Button onClick={() => handleCallbacks(1)} variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CvForm;
