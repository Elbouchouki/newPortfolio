import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
// import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  // // // const [theme, setTheme] = useState("light");
  // // // const setMode = (mode: string) => {
  // // //   window.localStorage.setItem("theme", mode);
  // // //   setTheme(mode);
  // // // };
  // // // const themeToggler = () => {
  // // //   theme === "light" ? setMode("dark") : setMode("light");
  // // // };

  // // // useEffect(() => {
  // // //   const localTheme = window.localStorage.getItem("theme");
  // // //   window.matchMedia &&
  // // //   window.matchMedia("(prefers-color-scheme: dark)").matches &&
  // // //   !localTheme
  // // //     ? setMode("dark")
  // // //     : localTheme
  // // //     ? setMode(localTheme)
  // // //     : setMode("light");
  // // //   // setComponentMounted(true)
  // // // }, []);

  return (
    <IconButton sx={{ color: "white" }} size="large">
      <DarkModeIcon fontSize="inherit" />
    </IconButton>
  );
};
