import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FormDataType } from "../../types/FormData";

interface Props {
  positionError: boolean;
  formData: FormDataType | undefined;
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

const PositionPrefrenceSy = ({
  positionError,
  formData,
  setPositions,
}: Props) => {
  const theme = useTheme();

  const getState = () => {
    if (formData?.positions && formData?.positions?.length > 0)
      return {
        TechnicalTeam: formData?.positions?.includes("TechnicalTeam")
          ? true
          : false,
        CreativeTeam: formData?.positions?.includes("CreativeTeam")
          ? true
          : false,
        MarketingTeam: formData?.positions?.includes("MarketingTeam")
          ? true
          : false,
      };
    else {
      return {
        TechnicalTeam: false,
        CreativeTeam: false,
        MarketingTeam: false,
      };
    }
  };
  const [state, setState] = useState(getState());

  useEffect(() => {
    positionStateToArray();
  }, [state]);

  const positionStateToArray = () => {
    const arr = [];
    for (var key in state) {
      if (state.hasOwnProperty(key)) {
        // @ts-ignore
        if (state[key] == true) arr.push(key);
      }
    }
    setPositions(arr);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { MarketingTeam, CreativeTeam, TechnicalTeam } = state;

  return (
    <FormControl
      required
      error={positionError}
      component="fieldset"
      sx={{ m: 3 }}
      variant="standard"
    >
      <FormLabel component="legend">Position Preference</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={MarketingTeam}
              onChange={handleChange}
              name="MarketingTeam"
            />
          }
          label="Marketing Team"
          style={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={CreativeTeam}
              onChange={handleChange}
              name="CreativeTeam"
            />
          }
          label="Creative Team"
          style={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={TechnicalTeam}
              onChange={handleChange}
              name="TechnicalTeam"
            />
          }
          label="Technical Team"
          style={{ color: theme.palette.text.primary }}
        />
      </FormGroup>
      <FormHelperText>Select At Least 2</FormHelperText>
    </FormControl>
  );
};

export default PositionPrefrenceSy;
