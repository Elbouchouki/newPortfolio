import { GlobalStyles } from "@mui/material";

export const ScrollBar = () => {
  return (
    <GlobalStyles
      styles={{
        body: { backgroundColor: "#000" },
        "*::-webkit-scrollbar": {
          width: "4px",
          backgroundColor: "transparent",
        },
        "*::-webkit-scrollbar-track": {
          borderRadius: "12px",
          backgroundColor: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "12px",
          boxShadow: "inset 0 0 16px rgba(0, 0, 0, 0.4)",
          backgroundColor: "#8e8d8d99",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#8e8d8d",
        },
      }}
    />
  );
};
