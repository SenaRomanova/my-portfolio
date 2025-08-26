import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import { useState } from "react";

export default function ProjectCard({
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
    }, 170); // Duration of the flip animation
  };

  const cardFront = (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        width: 400,
        height: 500,
        //bgcolor: " rgb(118, 71, 134)",
        bgcolor: "rgba(75, 16, 52, 0.85)",
        border: "0.8px solid rgb(255, 236, 201)",
        padding: 1,
      }}
    >
      {!isFlipping && (
        <>
          <CardMedia
            component="img"
            height="60%"
            image={src}
            alt="Project Image"
            sx={{ borderRadius: 1, border: "1px solid rgb(75,21,53)" }}
          />
          <CardContent>
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
        </>
      )}

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
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: 400,
        height: 500,
        bgcolor: "rgba(243,200,221, 0.75)",
        color: "white",
        border: "2px solid rgb(118, 71, 134)",
        padding: 1,
        transform: "rotateY(180deg)",
      }}
    >
      {!isFlipping && (
        <CardContent>
          <Typography
            variant="body2"
            align="right"
            sx={{ color: "rgb(71,21,53)" }}
          >
            {detailedDescription}
          </Typography>
        </CardContent>
      )}

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
        "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
        "&:not(:hover)": { transform: "scale(1)", transition: "0.3s" },
      }}
    >
      <Box
        onClick={flipCard}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.4s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          margin: 1,
          "&:hover": {
            cursor: "pointer",
            boxShadow: 5,
          },
        }}
      >
        {flipped ? cardBack : cardFront}
      </Box>
    </Box>
  );
}
