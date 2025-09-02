import { Avatar, Tooltip } from "@mui/material";
import myPhoto from "./myPhoto.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { baseTheme } from "./AppTheme";

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
          Hello! I'm Sena Romanova, a passionate software developer with a love
          for creating innovative solutions. With a background in computer
          science and a knack for problem-solving, I enjoy tackling complex
          challenges and turning ideas into reality. When I'm not coding, you
          can find me drawing, cooking, or indulging in my love for video games.
          Let's connect and create something amazing together!
        </Typography>
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
