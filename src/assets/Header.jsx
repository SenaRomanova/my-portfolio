import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "10vh",
          padding: 3,
          marginBottom: 2,
        }}
      >
        <Typography variant="h2" sx={{ color: "rgb(255, 236, 201)" }}>
          SENA ROMANOVA
        </Typography>
      </Box>

      <Divider sx={{ height: "0.3px", bgcolor: "rgb(255, 236, 201)" }} />
    </Box>
  );
}
