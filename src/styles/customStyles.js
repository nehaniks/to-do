import { createTheme } from "@mui/material/styles";

// Color theme
export const theme = createTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f73378",
      main: "#f50057",
      dark: "#ab003c",
      contrastText: "#fff",
    },
  },
});

// Container style
export const containerStyle = {
  height: "80vh",
  position: "relative",
};

// Add Button style
export const fabStyle = {
  position: "absolute",
  top: 60,
  right: 40,
  color: theme.palette.secondary.contrastText,
  bgcolor: theme.palette.secondary.dark,
  "&:hover": {
    bgcolor: theme.palette.secondary.main,
  },
};
