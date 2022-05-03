import { useEffect, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import FormBox from "./components/FormBox";
import { lightTheme } from "./theme/theme";
import WelcomeModal from "./components/WelcomeModal";
import Construction from "./components/Construction";
import ClosedModal from "./components/ClosedModal";

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

  return (
    <ThemeProvider theme={theme}>
      {/* <ClosedModal /> */}
      {window.location.pathname === "/apna-public-only" ? (
        <Box
          sx={{
            padding: { lg: 0, md: 2, sm: 2 },
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "url('/assets/apply-codecell.png')",
            backgroundSize: "cover",
          }}
        >
          {/* <Construction /> */}
          {showWelcome === true && <WelcomeModal />}
          <FormBox />
        </Box>
      ) : (
        <>
          <ClosedModal />
          <Box
            sx={{
              padding: { lg: 0, md: 2, sm: 2 },
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "url('/assets/apply-codecell.png')",
              backgroundSize: "cover",
            }}
          >
            {/* <Construction /> */}
            {showWelcome === true && <WelcomeModal />}
            <FormBox />
          </Box>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
