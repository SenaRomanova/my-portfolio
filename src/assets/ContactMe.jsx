import {
  Box,
  Stack,
  Container,
  Button,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  const isDesktop = useMediaQuery("(min-width:1000px)");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p8i5vtw",
        "template_22dzg2q",
        form.current,
        "YIIG-0l2458UJz3DR"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        component="form"
        ref={form}
        onSubmit={sendEmail}
        spacing={3}
        sx={{ width: "100%" }}
      >
        <TextField
          name="name"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Name"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderWidth: "2px", // normal thickness
              },
              "&:hover fieldset": {
                borderWidth: "2px",
                borderColor: "rgb(255, 236, 201)", // hover state
              },
              "&.Mui-focused fieldset": {
                borderWidth: "3px",
                borderColor: "rgb(118, 71, 134)", // focused state
              },
            },
          }}
        />
        <TextField
          name="email"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Email"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderWidth: "2px", // normal thickness
              },
              "&:hover fieldset": {
                borderWidth: "2px",
                borderColor: "rgb(255, 236, 201)", // hover state
              },
              "&.Mui-focused fieldset": {
                borderWidth: "3px",
                borderColor: "rgb(118, 71, 134)", // focused state
              },
            },
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          placeholder="Enter your email"
          fullWidth // stretches input to fill container width
          size="medium" // default is medium, you can adjust for legibility
          margin="normal" // adds vertical margin for spacing (alternative to Stack spacing)
          multiline
          rows={5}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderWidth: "2px", // normal thickness
              },
              "&:hover fieldset": {
                borderWidth: "2px",
                borderColor: "rgb(255, 236, 201)", // hover state
              },
              "&.Mui-focused fieldset": {
                borderWidth: "3px",
                borderColor: "rgb(118, 71, 134)", // focused state
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="text"
          sx={{
            color: "black",
            "&:hover": { color: "rgb(118, 71, 134)" },
            border: "1px solid rgb(118, 71, 134)",
          }}
        >
          Send
          <SendIcon sx={{ ml: 1 }} />
        </Button>
      </Stack>
    </Container>
  );
}
