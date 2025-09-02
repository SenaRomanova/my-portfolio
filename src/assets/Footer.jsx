import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "20vh",
        flexDirection: "column",
        bgcolor: "rgb(20, 12, 28)",
      }}
    >

      <Divider sx={{ height: "0.3px", bgcolor: "rgb(255, 236, 201)" }} />
    </Box>
  );
}
