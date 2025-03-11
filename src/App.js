import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import CrewList from "./components/CrewList";
import NavBar from "./components/NavBar";
import Missions from "./components/Missions";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <Box>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<CrewList />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
