import { createTheme } from "@mui/material";
import "./theme.css";

export const theme = createTheme({
  palette: {
    common: {
      black: "#090400",
      white: "#F0F0F0",
    },
  },
  typography: {
    fontFamily: ["quicksand", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightBold: "700",
  },
});
