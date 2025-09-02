import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { baseTheme } from "./AppTheme";
import Button from "@mui/material/Button";

export default function Header() {
  return (
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
}
