import React, { useState, useEffect } from "react";

import { Grid, Container, Typography, Card, CardContent, CardMedia } from "@mui/material";

import MissionCard from "./MissionCard";
import CrewCard from "./CrewCard";
import { missions } from "./Missions";
import { additionalInfo } from "./Crew";

const randIndex = Math.floor(Math.random() * missions.length);
const randomMission =
	missions[randIndex].items[
		Math.floor(Math.random() * missions[randIndex].items.length)
	];

const selectedCharacterIds = [
	1, 16, 425, 420, 421, 424, 382, 423, 278, 336, 320, 305, 279, 177, 179,
];

const Game = () => {
	const [characters, setCharacters] = useState([]);
	const [selectedCrew, setSelectedCrew] = useState([]);

	useEffect(() => {
		const fetchCharacter = async (id) => {
			try {
				const response = await fetch(
					`https://futuramaapi.com/api/characters/${id}`
				);
				if (!response.ok)
					throw new Error(`Failed to fetch character ${id}`);

				const data = await response.json();
				return data;
			} catch (error) {
				console.error("Error fetching character:", error);
				return null;
			}
		};

		const fetchAllCharacters = async () => {
			const promises = selectedCharacterIds.map((id) =>
				fetchCharacter(id)
			);
			const results = await Promise.all(promises);
			setCharacters(results.filter((char) => char !== null));
		};

		fetchAllCharacters();
	}, []);

	const onSelectCrew = (character) => {
		setSelectedCrew([...selectedCrew, character]);
		console.log(selectedCrew);
	};

	return (
		<Container>
			<Typography variant="h4"> Current Mission</Typography>
			<MissionCard mission={randomMission} />
			<Typography variant="h4" sx={{ marginTop: 3 }}>
				Available Crew
			</Typography>
			<Grid container spacing={2} sx={{ marginTop: 1 }}>
				{characters.map((character) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
					<CrewCard 
					character={character}
					additionalInfo={additionalInfo}
					onClick={onSelectCrew}
					/>
				</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Game;
