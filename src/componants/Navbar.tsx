import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import { Logo } from "./Logo";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MenuButton } from "./MenuToggle";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

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
      {/* main nav */}
      <Grid2
        container
        sx={{
          width: "100wv",
          height: "100px",
          background: { xs: "rgba(9,4,0,.45)", md: "black" },
          transition: (theme) =>
            theme.transitions.create("all", {
              duration: 1000,
            }),
        }}
      >
        {/* left side */}
        <Grid2 xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              ml: 3,
            }}
          >
            <Link
              sx={{ height: "100px" }}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Logo height="80px" />
            </Link>
            <Button>
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: "0.15rem",
                  fontSize: "2rem",
                  fontWeight: "400",
                  textTransform: "uppercase",
                  fontFamily: "Panton",
                  display: { xs: "none", md: "block" },
                  textShadow: "0px 2px 0px rgb(0 0 0 / 15%)",
                }}
              >
                Elbouchouki
              </Typography>
            </Button>
          </Box>
        </Grid2>

        {/* right side */}
        <Grid2 xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              ml: 1,
            }}
          >
            <ThemeToggle />
            <IconButton
              onClick={handleMenu}
              sx={{
                height: "100px",
                width: { xs: "100px", md: "250px" },
                borderRadius: "0px",
                gap: 2,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.05)",
                },
                transition: (theme) =>
                  theme.transitions.create("background", {
                    duration: 300,
                  }),
              }}
            >
              <MenuButton
                isOpen={menu}
                strokeWidth="5"
                color="white"
                lineProps={{ strokeLinecap: "round" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                width="26.5"
                height="20"
              />
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: "0.05rem",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "quicksand",
                  display: { xs: "none", md: "block" },
                  overflow: "hidden",
                }}
              >
                {menu ? "close" : "menu"}
              </Typography>
            </IconButton>
          </Box>
        </Grid2>
      </Grid2>
      {/* sub navs */}
      <Box
        sx={{
          width: "100wv",
          height: "50px",
          bgcolor: "rgba(9,4,0,.45)",
          display: { xs: "none", md: "block" },
        }}
      ></Box>
    </Box>
  );
};

{
  /* <Box sx={{ bgColor: "blue" }}>
          <Logo height="80px" />
        </Box> */
}
{
  /* </Box> */
}
{
  /* <Box sx={{ bgcolor: "red" }}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: "0.15rem",
              fontSize: "2rem",
              fontWeight: "900",
              textTransform: "uppercase",
              fontFamily: "Panton",
              textShadow: "0px 2px 0px rgb(0 0 0 / 15%)",
            }}
          >
            Elbouchouki
          </Typography>
        </Box> */
}
