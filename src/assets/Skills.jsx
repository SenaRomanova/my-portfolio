import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Skills() {
    return (
        <Box sx={{ width: "100%", marginTop: 3, marginBottom: 5 }}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            
                            width: 250,
                            height: 250,
                            margin: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            border: "1px solid rgb(118, 71, 134)",
                            borderRadius: 2,
                            padding: 1,
                        }}
                    >
                        <Typography variant="h5"> Languages </Typography>
                        <Typography variant="body2"> C# </Typography>
                        <Typography variant="body2"> C </Typography>
                        <Typography variant="body2"> Python </Typography>
                        <Typography variant="body2"> Java </Typography>
                        <Typography variant="body2"> JavaScript </Typography>
                        <Typography variant="body2"> HTML, CSS </Typography>
                        <Typography variant="body2"> OCaml </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            margin: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            border: "1px solid rgb(118, 71, 134)",
                            borderRadius: 2,
                            
                            padding: 1,
                        }}
                    >
                        <Typography textAlign='center' variant="h5"> Frameworks & Engines</Typography>
                        <Typography variant="body2"> React.js </Typography>
                        <Typography variant="body2"> scikit-learn </Typography>
                        <Typography variant="body2"> Unity </Typography>
                        <Typography variant="body2"> Unreal </Typography>
                        <Typography variant="body2"> Godot </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            margin: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            border: "1px solid rgb(118, 71, 134)",
                            borderRadius: 2,
                            
                            padding: 1,
                        }}
                    >
                        <Typography textAlign='center' variant="h5"> Developer Tools</Typography>
                        <Typography variant="body2"> Git </Typography>
                        <Typography variant="body2"> Plastic SCM </Typography>
                        <Typography variant="body2"> Notion </Typography>
                        <Typography variant="body2"> Trello </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
