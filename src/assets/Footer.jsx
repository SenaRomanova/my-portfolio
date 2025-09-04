import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { baseTheme } from "./AppTheme";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100%",
        height: "20vh",
        flexDirection: "column",
        bgcolor: "rgb(20, 12, 28)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{
        display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center',  width: "85vw",

        [baseTheme.breakpoints.up("lg")]: {
          maxWidth: 1200,
        },
      }}>
        <Typography variant="body2" color="white" sx={{ padding: 1 }}>
          © {new Date().getFullYear()} Sena Romanova. All rights reserved.
        </Typography>

        <Tooltip title="GitHub">
            <IconButton 
                size="large"
                component="a" 
                href="https://github.com/SenaRomanova" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                    width: 50, //clickable area
                    height: 50,
                    color: "white",
                    "&:hover": { color: "rgb(209,131,169)" },
                    paddingRight: 2
                }}
            >
                {/* visual */}
                <GitHubIcon sx={{fontSize: 35}} /> 
            </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
            <IconButton 
                size="large"
                component="a" 
                href="https://www.linkedin.com/in/kroma5/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                    width: 50, //clickable area
                    height: 50,
                    color: "white",
                    "&:hover": { color: "rgb(209,131,169)" }
                    , paddingRight: 2
                }}
            >
                {/* visual */}
                <LinkedInIcon sx={{fontSize: 35}} /> 
            </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ height: "0.3px", bgcolor: "rgb(255, 236, 201)" }} />
    </Box>
  );
}
