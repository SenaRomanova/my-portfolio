import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: "rgb(18, 13, 43)",
        width: "100%",
        height: "10vh",
        padding: 3,
      }}
    >
      <Typography variant="h3" sx={{ color: "rgb(243, 200, 221)" }}>
        SENA ROMANOVA
      </Typography>
    </Box>
  );
}
