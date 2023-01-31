import { Box } from "@mui/material";

export const Navbar = () => {
  return (
    <Box
      sx={{
        position: { xs: "absolute", lg: "fixed", zIndex: 100 },
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      <Box
        sx={{ width: "100wv", height: "100px", bgcolor: "common.black" }}
      ></Box>
      <Box
        sx={{
          width: "100wv",
          height: "50px",
          bgcolor: "common.black",
          opacity: 0.7,
        }}
      ></Box>
    </Box>
  );
};
