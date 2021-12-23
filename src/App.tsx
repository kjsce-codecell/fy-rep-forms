import { useEffect, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import FormBox from "./components/FormBox";
import { lightTheme } from "./theme/theme";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  const [theme] = useState(lightTheme);
  const [showWelcome, setShowWelcome] = useState<boolean | undefined>();

  useEffect(() => {
    const check = localStorage.getItem("CodecellApplyWelcomeModal");
    if (check && check === "true") {
      setShowWelcome(false);
    } else {
      setShowWelcome(true);
    }
    return () => {};
  }, []);

  // const changeTheme = () => {
  //   if (theme == darkTheme) {
  //     setTheme(lightTheme);
  //   } else {
  //     setTheme(darkTheme);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      {/* <video autoPlay loop id="vid">
        <source src="assets/logos/bg.mp4" type="video/mp4" />
      </video> */}
      <Box
        sx={{
          padding: { lg: 0, md: 2, sm: 2 },
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "url('/assets/apply-codecell.png')",
          backgroundSize: "cover",
        }}
      >
        {showWelcome === true && <WelcomeModal />}
        <FormBox />
      </Box>
    </ThemeProvider>
  );
}

export default App;
