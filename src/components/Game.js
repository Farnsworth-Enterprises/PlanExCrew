import React from "react";

import MissionCard from "./MissionCard";

import { missions } from "./Missions";
import { additionalInfo } from "./Crew";

const randIndex = Math.floor(Math.random() * missions.length);
const randomMission =
	missions[randIndex].items[
		Math.floor(Math.random() * missions[randIndex].items.length)
	];




const Game = () => {
	return (
		<div>
			<h1>Game</h1>
			<h2>Missions</h2>
            <MissionCard mission={randomMission} />
			<h2>Crew</h2>
			<ul>
				{Object.keys(additionalInfo).map((character, index) => (
					<li key={index}>
						{character} - {additionalInfo[character].rating}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Game;
