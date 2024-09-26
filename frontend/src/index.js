import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: amber[500],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
