import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://images.alphacoders.com/236/236781.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end", 
      }}
    >
    <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        About
      </Typography>
      <Paper
        elevation={6} 
        sx={{
          padding: "20px",
          marginRight: "10%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
          color: "black",
          borderRadius: "10px",
        }}
      >

        <Typography variant="h4" gutterBottom>
          How to Play PlanExCrew
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          1. Assemble your crew by selecting members from the roster. <br />
          2. Assign missions to your crew based on their strengths. <br />
          3. Complete missions to finish the test. <br />
          4. Make strategic decisions to survive in space!
        </Typography>

        <Typography variant="h5" gutterBottom>
          Project Repository
        </Typography>
        <Link
          href="https://github.com/Farnsworth-Enterprises/PlanExCrew"
          target="_blank"
          rel="noopener"
          color="primary"
          underline="hover"
          variant="h6"
        >
          PlanExCrew GitHub Repository
        </Link>

        <Typography variant="h5" sx={{ marginTop: "20px" }}>
          Created by
        </Typography>
        <Link
          href="https://github.com/jbiehl88"
          target="_blank"
          rel="noopener"
          color="primary"
          underline="hover"
          variant="h6"
        >
          Jordan Biehl
        </Link>
        <br />
        <Link
          href="https://github.com/zluigon"
          target="_blank"
          rel="noopener"
          color="primary"
          underline="hover"
          variant="h6"
        >
          Luis Gonzalez
        </Link>
      </Paper>
    </Box>
  );
};

export default About;

