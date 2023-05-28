import { ThemeOptions, createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  subsets: ["latin"]
});

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
    fontFamily: dmsans.style.fontFamily,
    fontSize: 18,
    body1: {
      fontSize: 18,
      color: "white"
    },
    body2: {
      fontSize: 16,
      color: "white"
    },
    subtitle1: {
      fontSize: 14,
      color: "white"
    },
    h1: {
      fontSize: 30,
      color: "white"
    },
    h2: {
      fontSize: 22,
      color: "white"
    }
  }
});

export default themeOptions;
