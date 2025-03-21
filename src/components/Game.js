import React, { useState, useEffect } from "react";

import MissionCard from "./MissionCard";
import CrewCard from "./CrewCard";
import { missions } from "./Missions";
import { additionalInfo } from "./Crew";

import { Button, Box } from "@mui/material";

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
	const [crew, setCrew] = useState([]);

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
		if (crew.length === 3) {
			console.log("Crew is full");
			console.log(crew);
			return;
		}

		if (crew.includes(character)) {
			console.log("Character already in crew");
			return;
		}

		setCrew([...crew, character]);
	};

	const resetCrew = () => {
		setCrew([]);
	};

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button onClick={resetCrew}>Reset Crew</Button>
			</Box>
			<h2>Missions</h2>
			<MissionCard mission={randomMission} />

			<h2>Selected Crew</h2>
			{crew.length > 0 &&
				crew.map((character, index) => (
					<CrewCard
						key={index}
						character={character}
						additionalInfo={additionalInfo}
					/>
				))}
			{crew.length === 0 && <h2>No crew selected</h2>}

			<h2>Crew List</h2>
			{characters.map((character, index) => (
				<CrewCard
					key={index}
					character={character}
					additionalInfo={additionalInfo}
					onSelectCrew={onSelectCrew}
				/>
			))}
		</div>
	);
};

export default Game;
