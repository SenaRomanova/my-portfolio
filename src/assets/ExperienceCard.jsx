import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import { useState } from "react";

export default function ExperienceCard({
  src,
  title,
  description,
  detailedDescription,
  technologies,
  detailedTechnologies,
}) {
  const [flipped, setFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCard = () => {
    setIsFlipping(true);
    setFlipped(!flipped);
    setTimeout(() => {
      setIsFlipping(false);
    }, 200); // Duration of the flip animation
  };

  const cardFront = (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 500,
        bgcolor: "rgba(75, 16, 52, 0.5)",
        border:
          "0.8px solid linear-gradient(90deg, rgba(118,71,134,1) 0%, rgba(209,131,169,1) 100%)",
        padding: 1,
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt="Project Image"
        sx={{
          width: "50%",
          height: "auto",
          borderRadius: 1,
          border: "1px solid rgb(75,21,53)",
        }}
      />
      <CardContent
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <Typography
          gutterBottom
          align="right"
          variant="h5"
          component="div"
          sx={{
            color: "rgb(255, 236, 201)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          align="right"
          sx={{ color: "rgb(255, 236, 201)" }}
        >
          {description}
        </Typography>
      </CardContent>

      <Box sx={{ flexDirection: "row" }}>
        {technologies.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            sx={{
              bgcolor: "rgb(209,131,169)",
              border: "1px solid rgb(75,21,53)",
              "& .MuiChip-label": {
                color: "rgb(255, 236, 201)",
                fontFamily: "'Roboto', sans-serif",
              },
            }}
          ></Chip>
        ))}
      </Box>
    </Card>
  );

  const cardBack = (
    <Card
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 500,
        bgcolor: "rgba(243,200,221, 0.75)",
        color: "white",
        border: "2px solid rgb(118, 71, 134)",
        padding: 1,
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          align="right"
          sx={{ color: "rgb(71,21,53)" }}
        >
          {detailedDescription}
        </Typography>
      </CardContent>

      <Box sx={{ flexDirection: "row" }}>
        {detailedTechnologies.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            sx={{
              bgcolor: "rgb(209,131,169)",

              border: "1px solid rgb(75,21,53)",
              "& .MuiChip-label": {
                color: "rgb(255, 236, 201)",
                fontFamily: "'Roboto', sans-serif",
              },
            }}
          ></Chip>
        ))}
      </Box>
    </Card>
  );

  return (
    <Box
      sx={{
        perspective: "1000px", // keep perspective for depth
        "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
        "&:not(:hover)": { transform: "scale(1)", transition: "0.3s" },
      }}
    >
      <Box
        onClick={flipCard}
        sx={{
          position: "relative", // important so children can be absolute
          width: 1000,
          height: 500,
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
          margin: 1,
          "&:hover": {
            cursor: "pointer",
            boxShadow: 5,
          },
        }}
      >
        {/* Front */}
        <Box
          sx={{
            position: "absolute", // stack in the same spot
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          {cardFront}
        </Box>

        {/* Back */}
        <Box
          sx={{
            position: "absolute", // stack in the same spot
            width: "100%",
            height: "100%",
            transform: "rotateX(180deg)", // rotated behind
            backfaceVisibility: "hidden",
          }}
        >
          {cardBack}
        </Box>
      </Box>
    </Box>
  );
}
