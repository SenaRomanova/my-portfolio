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
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
