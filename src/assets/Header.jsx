import Box from "@mui/material/Box";
import { Divider, IconButton, Typography } from "@mui/material";
import { baseTheme } from "./AppTheme";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const drawerWidth = "90vw";
  const drawerHeight = 600;

  const [phoneMenuOpen, setMenuOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width:900px)");

  const pcver = (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        paddingTop: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "10vh",
          padding: 3,
          marginBottom: 2,
        }}
      >
        <Typography variant="h2" sx={{ color: "rgb(255, 236, 201)" }}>
          SENA ROMANOVA
        </Typography>

        <Box>
          <Button
            href="#projects"
            color="white"
            sx={{ "&:hover": { color: "rgb(209,131,169)" } }}
          >
            {/*scroll behavior smooth in css html is what actually made it smooth*/}
            Projects
          </Button>
          <Button
            href="#experience"
            color="white"
            sx={{ "&:hover": { color: "rgb(209,131,169)" } }}
          >
            Experience
          </Button>
          <Button
            href="#contact"
            color="white"
            sx={{ "&:hover": { color: "rgb(209,131,169)" } }}
          >
            Contact
          </Button>
        </Box>
      </Box>

      <Divider sx={{ height: "0.3px", bgcolor: "rgb(255, 236, 201)" }} />
    </Box>
  );

  const mobilever = (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        paddingTop: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "10vh",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="h2" sx={{ color: "rgb(255, 236, 201)" }}>
          SENA ROMANOVA
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            padding: 2,
          }}
        >
          <IconButton
            aria-label="menu"
            onClick={() => {
              setMenuOpen(true);
            }}
            sx={{
              height: 85,
              width: 85,
            }}
          >
            <MenuIcon sx={{ fontSize: 50, color: "rgb(209,131,169)" }} />
          </IconButton>

          <Drawer
            anchor="right"
            variant="temporary"
            open={phoneMenuOpen}
            onClose={() => setMenuOpen(false)}
            sx={{
              "& .MuiDrawer-paper": { backgroundColor: "rgb(209,131,169)" },
            }}
          >
            <Box
              sx={{
                width: drawerWidth,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
              }}
            >
              <IconButton
                aria-label="menu"
                onClick={() => {
                  setMenuOpen(false);
                }}
                sx={{
                  [baseTheme.breakpoints.up("xs")]: { width: 80 },
                  [baseTheme.breakpoints.up("sm")]: { width: 100 },
                  alignSelf: "flex-end",
                  justifySelf: "flex-start",
                  position: "absolute",
                  top: 10,
                }}
              >
                <CloseIcon
                  sx={{
                    [baseTheme.breakpoints.up("xs")]: { fontSize: 50 },
                    [baseTheme.breakpoints.up("sm")]: { fontSize: 60 },
                  }}
                />
              </IconButton>
              <Button
                href="#projects"
                color="white"
                onClick={() => setMenuOpen(false)}
                sx={{ "&:hover": { color: "rgb(75,21,53)" } }}
              >
                {/*scroll behavior smooth in css html is what actually made it smooth*/}
                Projects
              </Button>
              <Button
                href="#experience"
                color="white"
                onClick={() => setMenuOpen(false)}
                sx={{ "&:hover": { color: "rgb(75,21,53)" } }}
              >
                Experience
              </Button>
              <Button
                href="#contact"
                color="white"
                onClick={() => setMenuOpen(false)}
                sx={{ "&:hover": { color: "rgb(75,21,53)" } }}
              >
                Contact
              </Button>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );

  return isDesktop ? pcver : mobilever;
}
