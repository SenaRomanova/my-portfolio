import { createTheme } from "@mui/material";

export const baseTheme = createTheme();

const theme = createTheme({
  typography: {
    h3: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "2.5rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "2.6rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "2.7rem" },
    },
    h4: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "1.55rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "1.65rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "1.75Srem" },
    },
    h5: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "1.35rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "1.4rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "1.5rem" },
    },
    h6: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "1rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "1.125rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "1.25rem" },
    },
    body1: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "1.2rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "1.25rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
    },
    button: {
      [baseTheme.breakpoints.up("xs")]: { fontSize: "2rem" },
      [baseTheme.breakpoints.up("md")]: { fontSize: "1.5rem" },
      [baseTheme.breakpoints.up("lg")]: { fontSize: "1.3rem" },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          [baseTheme.breakpoints.up("xs")]: {
            fontSize: "0.8rem",
          },
          [baseTheme.breakpoints.up("md")]: {
            fontSize: "1rem",
          },
          [baseTheme.breakpoints.up("lg")]: {
            fontSize: "1.2rem",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          [baseTheme.breakpoints.up("xs")]: {
            width: 250,
            height: 250,
          },
          [baseTheme.breakpoints.up("sm")]: {
            width: 350,
            height: 350,
          },
          [baseTheme.breakpoints.up("md")]: {
            width: 400,
            height: 400,
          },
          [baseTheme.breakpoints.up("lg")]: {
            width: 450,
            height: 450,
          },
        },
      },
    },
  },
});

export default theme;
