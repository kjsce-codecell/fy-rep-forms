import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {}

const Example = (props: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      boxShadow={2}
      margin={3}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab sx={{ px: { lg: 20, xs: 6 } }} label="Login" {...a11yProps(0)} />
          <Tab
            sx={{ px: { lg: 16, xs: 6 } }}
            label="Register"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      {/* login */}
      <TabPanel value={value} index={0}>
        {"Login :)"}
      </TabPanel>
      {/* register */}
      <TabPanel value={value} index={1}>
        <Typography sx={{ textAlign: "center" }}>
          {"Login Register same he hai :)"}
        </Typography>
      </TabPanel>
    </Box>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

export default Example;
