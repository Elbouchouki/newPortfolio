import { Box, CardMedia, Typography } from "@mui/material";
import { Logo } from "../componants/Logo";
import { INFORMATION } from "../constants/content";

export const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
      }}
    >
      <CardMedia
        sx={{
          objectFit: "cover",
          position: "absolute",
          height: "100vh",
          minHeight: "600px",
          zIndex: -1,
          filter: "brightness(50%)",
        }}
        image="src/assets/wall.png"
        component="img"
        height="100vh"
      />
      <Box
        sx={{
          pt: 10,
          height: "100vh",
          minHeight: "600px",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mb: 2,
            ml: 5,
            maxWidth: "300px",
            width: "50%",
          }}
        >
          <Logo />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: "clamp(2rem, 10vw, 3rem)",
            color: "white",
            fontFamily: "Panton",
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "0px 2px 0px rgb(0 0 0 / 15%)",
          }}
        >
          {INFORMATION.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            p: 1,
            fontSize: "1.1rem",
            color: "white",
            textAlign: "center",
            letterSpacing: "0.75px",
          }}
        >
          {INFORMATION.bio}
        </Typography>
      </Box>
    </Box>
  );
};
