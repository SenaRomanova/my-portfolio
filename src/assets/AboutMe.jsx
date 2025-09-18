import { Avatar, Button, Tooltip } from "@mui/material";
import myPhoto from "./myPhoto.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { baseTheme } from "./AppTheme";
import LaunchIcon from "@mui/icons-material/Launch";

export default function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        [baseTheme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography
          variant="h3"
          sx={{
            color: "rgb(255, 236, 201)",
            paddingBottom: 2,
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgb(255, 236, 201)", paddingRight: 3 }}
        >
          Hello! I'm Sena Romanova, a passionate software developer with deep love for solving problems. With a background in computer
          science and a love for challenge, I use my skills to turn ideas into reality. When I'm not coding, you
          can find me drawing, cooking, or indulging in my love for video games.
          Let's connect and create something amazing together!
        </Typography>

        <Box
          sx={{
            marginTop: 3,
            border: "2px solid",
            borderImage:
              "linear-gradient(45deg, rgba(253, 68, 158, 1), rgba(235, 189, 105, 1)) 1",
            width: "fit-content",
          }}
        >
          <Button
            component="a"
            href="https://drive.google.com/file/d/1UKvCxVP88i-m1i4gH8f-aZ7Zl89Vf5iu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
          >
            <LaunchIcon sx={{ marginRight: 1 }} />
            My Resume
          </Button>
        </Box>
      </Box>

      <Tooltip title=" Hey, this is me :P ">
        <Avatar
          alt="Sena Romanova avatar"
          src={myPhoto}
          sx={{
            justifySelf: "center",
            border: "2px solid rgb(255, 236, 201)",
          }}
        />
      </Tooltip>
    </Box>
  );
}
