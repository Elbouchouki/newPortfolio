import { createTheme } from "@mui/material/styles";
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
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         "& ::-webkit-scrollbar": {
  //           width: "20px",
  //         },
  //         "& ::-webkit-scrollbar-track": {},
  //         "& ::-webkit-scrollbar-thumb": {},
  //         "& ::-webkit-scrollbar-thumb:hover": {},
  //       },
  //     },
  //   },
  // },
});
