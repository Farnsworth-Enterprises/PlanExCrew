import React from "react";
import CrewList from "./components/CrewList";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Planet Express Crew
      </Typography>
      <CrewList />
    </Container>
  );
};

export default App;
