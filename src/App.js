import React from "react";
import CrewList from "./components/CrewList";
import NavBar from "./components/NavBar";
import Missions from "./components/Missions";
import About from "./components/About";
import Home from "./components/Home";
import { Container, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container sx={{width: "100%"}}>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<CrewList />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </Container>
  );
};

export default App;
