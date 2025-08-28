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

import MallocImg from "./assets/MallocCallocReallocimg.png";
import AboutMe from "./assets/AboutMe";
import ContactForm from "./assets/ContactMe";
import ExperienceCard from "./assets/ExperienceCard";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1200,
            height: "100%",
          }}
        >
          <Header />
          <AboutMe />
          <Typography
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 5,
              paddingBottom: 2,
            }}
          >
            My Projects
          </Typography>

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

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ProjectCard
              title={"Project 1"}
              description={"Short Description"}
              src={MallocImg}
              technologies={["C", "Git", "Emacs"]}
              detailedDescription={
                "This is a longer description of the project. It goes into more detail about what the project entailed, the challenges faced, and the outcomes achieved."
              }
              detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
            />
            <ProjectCard
              title={"Project 1"}
              description={"Short Description"}
              src={MallocImg}
              technologies={["C", "Git", "Emacs"]}
              detailedDescription={
                "This is a longer description of the project. It goes into more detail about what the project entailed, the challenges faced, and the outcomes achieved."
              }
              detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
            />
            <ProjectCard
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
          <Typography
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 5,
              paddingBottom: 2,
            }}
          >
            Contact Me
          </Typography>
          <ContactForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
