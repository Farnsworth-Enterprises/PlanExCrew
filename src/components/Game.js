import React, { useState, useEffect } from "react";

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
		<div>
			<h1>Game</h1>
			<h2>Missions</h2>
			<MissionCard mission={randomMission} />
			<h2>Crew</h2>
			{characters.map((character) => (
				<CrewCard
					key={character.id}
					character={character}
					additionalInfo={additionalInfo}
					onClick={onSelectCrew}
				/>
			))}
		</div>
	);
};

export default Game;
