import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import CrewList from "./components/Crew";
import NavBar from "./components/NavBar";
import Missions from "./components/Missions";
import About from "./components/About";
import Home from "./components/Home";
import Game from "./components/Game";

const App = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Router>
				<NavBar />
				<Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/crew" element={<CrewList />} />
						<Route path="/missions" element={<Missions />} />
						<Route path="/about" element={<About />} />
						<Route path="/game" element={<Game />} />
					</Routes>
				</Box>
			</Router>
		</Box>
	);
};

export default App;
