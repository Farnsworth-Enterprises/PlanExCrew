import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://hallofbeorn.wordpress.com/wp-content/uploads/2023/10/futurama2.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 100, 
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{
            fontSize: "2rem", 
            padding: "12px 24px", 
          }}
        >
          Start
        </Button>
        <Typography variant="h1" color="white" sx={{ mt: 2 }}>
          Create a crew and complete missions!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;