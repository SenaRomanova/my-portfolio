import {
  Button,
  Box,
  Typography,
  Container,
  ThemeProvider,
} from "@mui/material";
import Header from "./assets/Header";
import ProjectCard from "./assets/ProjectCard";
import AppTheme from "./assets/AppTheme";
import Grid from "@mui/material/Grid";
import { baseTheme } from "./assets/AppTheme";
import MallocImg from "./assets/MallocCallocReallocimg.png";
import AboutMe from "./assets/AboutMe";
import ContactForm from "./assets/ContactMe";
import ExperienceCard from "./assets/ExperienceCard";
import Footer from "./assets/Footer";

function App() {
  const experiences = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ExperienceCard
        title={"Project 1"}
        description={"Short Description"}
        src={MallocImg}
        technologies={["C", "Git", "Emacs"]}
        detailedDescription={
          "This is a longer description of the project. It goes into more detail about what the project entailed, the challenges faced, and the outcomes achieved."
        }
        detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
      />
    </Box>
  );

  const projects = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",

        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Project 1"
            description="Short Description"
            src={MallocImg}
            technologies={["C", "Git", "Emacs"]}
            detailedDescription="This is a longer description..."
            detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Project 2"
            description="Short Description"
            src={MallocImg}
            technologies={["C", "Git", "Emacs"]}
            detailedDescription="This is a longer description..."
            detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Project 3"
            description="Short Description"
            src={MallocImg}
            technologies={["C", "Git", "Emacs"]}
            detailedDescription="This is a longer description..."
            detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <ThemeProvider theme={AppTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "85vw",

            [baseTheme.breakpoints.up("lg")]: {
              maxWidth: 1200,
            },
            height: "100%",
          }}
        >
          <Header />
          <AboutMe />

          <Typography
            id="projects"
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
            My Projects
          </Typography>

          {projects}

          <Box sx={{ width: "100%", height: "10vh" }} />

          <Typography
            variant="h3"
            id="experience"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
            Work Experience
          </Typography>
          {experiences}

          <Box sx={{ width: "100%", height: "10vh" }} />

          <Typography
            variant="h3"
            id="contact"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 5,
              paddingBottom: 2,
            }}
          >
            Contact Me
          </Typography>
          <ContactForm />
          <Box sx={{ width: "100%", height: "15vh" }} />
        </Box>
      </Box>

      <Box sx={{ width: "100vw" }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
