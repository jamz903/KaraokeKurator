import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#FF9900"
    },
    secondary: {
      main: "#f50057"
    },
    background: {
      default: "#000000",
      paper: "#181818"
    },
    text: {
      secondary: "#6F6F6F"
    }
  },
  typography: {
    fontSize: 18,
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 16
    },
    subtitle1: {
      fontSize: 14
    },
    h1: {
      fontSize: 30
    },
    h2: {
      fontSize: 22
    }
  }
});

export default themeOptions;
