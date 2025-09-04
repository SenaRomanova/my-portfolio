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
import AntGame from "./assets/antgame.png";
import OCamlLogo from "./assets/ocaml.jpg";

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
            title="Custom Memory Allocator in C"
            description="Implemented a custom multi-pool allocator in C "
            src={MallocImg}
            technologies={["C", "POSIX", "Unix", "Git", "Make", "gdb"]}
            detailedDescription="Built a custom multi-pool memory allocator supporting allocations of 1–4088 bytes with 8-byte alignment. 
            Implemented malloc, calloc, realloc, and free using explicit free lists to reuse blocks and reduce OS calls.
            Challenges included managing pointer arithmetic safely, maintaining 8-byte alignment across allocations, 
            and ensuring realloc worked correctly without introducing memory errors. 
            The allocator was tested by running standard Unix commands successfully on top of it."
            detailedTechnologies={["C", "POSIX", "Unix", "Git", "Make", "GDB"]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Incremental Idle Game"
            description="Created an idle game in Unity using C#"
            src={AntGame}
            technologies={["C#", "Unity", "PlasticSCM"]}
            detailedDescription="Worked in a team to build an incremental idle game in Unity, focusing on economy systems for resource exchange, scaling, and progression. A key challenge was managing and passing data for purchasable components across multiple in-game shops, which I solved using scriptable objects for flexibility and extensibility. Also implemented a dynamic UI that updated with player state and ensured systems were scalable for future additions."
            detailedTechnologies={["C#", "Unity", "PlasticSCM"]}
            demolink={"https://rarechip.itch.io/incrementalsomething"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Bytecode Interpreter"
            description="Short Description"
            src={OCamlLogo}
            technologies={["C", "Git", "Emacs"]}
            detailedDescription="This is a longer description..."
            detailedTechnologies={["C", "Git", "Emacs", "Posix"]}
            demolink={
              "https://drive.google.com/file/d/15itw1pN9z_rypDZI1kEmkT2R9K0tZwt8/view?usp=sharing"
            }
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
            Skills
          </Typography>

          <Typography
            id="projects"
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
            Projects
          </Typography>

          {projects}

          <Box sx={{ width: "100%", height: "10vh" }} />

          {/* <Typography
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
          {experiences} */}

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
