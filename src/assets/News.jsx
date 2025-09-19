import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { baseTheme } from "./AppTheme";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";

export default function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 5,
        border: "1px solid",
        borderImage:
          "linear-gradient(45deg, rgba(253, 68, 158, 1), rgba(235, 189, 105, 1)) 1",
        padding: 3,
      }}
    >
      <Typography
        variant="h3"
        textAlign={"left"}
        sx={{
          color: "rgb(255, 236, 201)",
          paddingBottom: 2,
        }}
      >
        What's New, Sena?
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "rgb(255, 236, 201)", paddingRight: 3 }}
      >
        Oof! It's been a while since I last updated my portfolio. I have decided
        that I should make it a habit to post updates here every few months. So,
        here's what's new:
        <br />
        <br />
        <Box sx={{ marginLeft: 5 }}>
          <ul>
            <li>
              I have started learning ASP.NET and how to apply my gamedev-born
              knoledge of C# to web development and backend systems.
              <br />
              In order to do that, I am building a practice CRUD application
              that represents a simple game store.
              <br />
              You can check out my progress here:
              <Button
                component="a"
                variant="outlined"
                href="https://github.com/SenaRomanova/GameStore"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  margin: 1,
                  marginLeft: 3,
                  borderColor: "rgb(173, 144, 163)",
                  color: "rgb(231, 131, 195)",
                  "&:hover": { color: "rgb(163, 70, 194)" },
                }}
              >
                <LaunchIcon sx={{ marginRight: 1 }} />
                Demo
              </Button>
            </li>
            <li>
              I am also diving into SQL and database management to enhance my
              backend skills
            </li>

            <li>
              {" "}
              I have started working on a new game project as a part of my
              internship to better expand my understanding of the software /
              game design processes
            </li>
          </ul>
          <br />
          It is a busy time, but I am excited to keep learning and growing!
        </Box>
      </Typography>
    </Box>
  );
}
