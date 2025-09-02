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

import MallocImg from "./assets/MallocCallocReallocimg.png";
import AboutMe from "./assets/AboutMe";
import ContactForm from "./assets/ContactMe";
import ExperienceCard from "./assets/ExperienceCard";
import Footer from "./assets/Footer";

function App() {

  const experiences = (
    <Box>
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
    <Box sx={{ display: "flex", width: 1200, flexDirection: "row", border: "0.5px solid", borderImage: "linear-gradient(45deg, rgba(253, 68, 158), rgba(235, 189, 105)) 0.5", flexWrap: "wrap", justifyContent: "space-evenly", padding: 1 }}>
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

  );

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
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
           My Projects
          </Typography>
          {projects}

          <Typography
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
            Work Experience
          </Typography>
          {experiences}

          
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
      </Box>\
      
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
