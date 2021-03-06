import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const mainBlack = "#000";
const mainWhite = "#fff";
const mainRed = "#e50914";
const mainBlue = "#3e6bfd";
const blue = "#757ce8";
const orange = "#ffa00a";
// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      mf: 1024,
      mt: 1080,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    common: {
      mainBlue: mainBlue,
      black: mainBlack,
      white: mainWhite,
      blue: blue,
      red: mainRed,
      orange: orange,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
    error: {
      main: orange,
    },
  },
  typography: {
    h1: {
      color: mainWhite,
      fontSize: "3rem",
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.75rem",
      },
    },
    h2: {
      color: mainWhite,
      fontSize: "1.75rem",
      fontWeight: 400,
      [breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.25rem",
      },
    },
    h3: {
      color: mainWhite,
      fontSize: "1.5rem",
      fontWeight: 300,
      [breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    a: {
      color: `${mainWhite} !important`,
    },
    body1: {
      fontSize: "22px",
      [breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    body2: {
      fontSize: "18px",
      [breakpoints.down("sm")]: {
        fontSize: "16px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    button: {
      background: mainBlue,
      textTransform: "none",
      "&.MuiButton-text": {
        padding: " 6px 16px !important",
      },

      "&.MuiButton-root:hover": {
        backgroundColor: `#073df0 !important`,
      },
      "& .MuiButton-label": {
        color: `${mainWhite} !important`,
      },
    },
  },
});

export default theme;
