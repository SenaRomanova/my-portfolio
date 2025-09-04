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
import Skills from "./assets/Skills";
import PythonLogo from './assets/pythonlogo.png';
import Screenshot from './assets/WebsiteScreenshot.png';

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
            technologies={["C", "Unix", "Git"]}
            detailedDescription="Built a custom multi-pool memory allocator supporting allocations of 1–4088 bytes with 8-byte alignment. 
            Implemented malloc, calloc, realloc, and free using explicit free lists to reuse blocks and reduce OS calls.
            Challenges included managing pointer arithmetic safely, maintaining 8-byte alignment across allocations, 
            and ensuring realloc worked correctly without introducing memory errors. 
            The allocator was tested by running standard Unix commands successfully on top of it."
            demolink={
              "https://drive.google.com/file/d/1-GOOpUg9BkChFyc0Wz5hz9QieUXKTawS/view?usp=sharing"
            }
            detailedTechnologies={["C", "Unix", "Git", "Make", "GDB"]}
            schoolProject={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Artist Portfolio Website"
            description="Built a website for an artist using React.js and Material-UI"
            src={Screenshot}
            technologies={["React.js", "JavaScript", "Material-UI"]}
            detailedDescription=" Project in development. Will be launched no later than Sep 15, 2025.
            Created a responsive portfolio website for an artist to showcase their work and provide contact information. Implemented smooth scrolling navigation, interactive project cards with flip animations, and a contact form using React.js and Material-UI. Ensured the site was visually appealing and user-friendly across devices."
            detailedTechnologies={["React.js", "JavaScript", "Material-UI", "HTML", "CSS"]}
        
            
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            title="Part-of-Speech Tagging for a LLM"
            description="Trained Pythia-160 to differentiate parts of speech in a text"
            src={PythonLogo}
            technologies={["Python", "Machine Learning", "scikit-learn"]}
            detailedDescription="This project has been done as a technical take-home assignment for an Interview-style exam. Trained Pythia-160 on a large dataset to differentiate parts of speech in a text and labeling each word with the POS it belongs to.
             Repeated the training process on multiple depths: 0, 3, and 10 layers of processing.
              Used scikit-learn to add metrics and evaluate the accuracy of my trained model.
              Wrote a comprehensive analysis of my results with the assumptions about the precision of the model."
            demolink={
              "https://colab.research.google.com/drive/1QMuchJS1Xg7RwYqtDzrTjgSbk9eprqBT?usp=sharing"
            }
            detailedTechnologies={["Python", "Machine Learning", "scikit-learn"]}
            schoolProject={true}
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
            description="Built a stack-based interpreter in OCaml"
            src={OCamlLogo}
            technologies={["OCaml"]}
            detailedDescription="Implemented commands present in every programming language, such as 
    creating and modifying variables and storing them in the stack corresponding to the scope where the variable has been created; performing simple operations on said variables, like integer operations, concatenating strings, or evaluating booleans.
Implemented functions which get executed and may return a value which may get tied to a variable or used within a different functions"
            detailedTechnologies={["OCaml"]}
            demolink={
              "https://drive.google.com/file/d/15itw1pN9z_rypDZI1kEmkT2R9K0tZwt8/view?usp=sharing"}
            schoolProject={true}
            
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
            variant="h3"
            sx={{
              color: "rgb(255, 236, 201)",
              paddingTop: 10,
              paddingBottom: 2,
            }}
          >
            Skills
          </Typography>
          <Skills />

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
