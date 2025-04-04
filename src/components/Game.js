import React, { useState, useEffect, useCallback } from "react";
import {
	Grid,
	Container,
	Typography,
	Snackbar,
	Alert,
	Button,
	Box,
} from "@mui/material";

import MissionCard from "./MissionCard";
import CrewCard from "./CrewCard";
import CrewSection from "./CrewSection";
import { missions } from "./Missions";
import { additionalInfo } from "./Crew";

const selectedCharacterIds = [
	1, 16, 425, 420, 421, 424, 382, 423, 278, 336, 320, 305, 279, 177, 179,
];

const MAX_ATTEMPTS = 3;

const getRandomMission = () => {
	const randIndex = Math.floor(Math.random() * missions.length);
	return missions[randIndex].items[
		Math.floor(Math.random() * missions[randIndex].items.length)
	];
};

const Game = () => {
	const [characters, setCharacters] = useState([]);
	const [crew, setCrew] = useState([]);
	const [alerts, setAlerts] = useState([]);
	const [currentAlert, setCurrentAlert] = useState(null);
	const [missionResult, setMissionResult] = useState(null);
	const [currentMission, setCurrentMission] = useState(getRandomMission());
	const [error, setError] = useState(null);
	const [attempts, setAttempts] = useState(0);

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
				throw error;
			}
		};

		const fetchAllCharacters = async () => {
			try {
				setError(null);
				const promises = selectedCharacterIds.map((id) =>
					fetchCharacter(id)
				);
				const results = await Promise.all(promises);
				const charactersWithInfo = results
					.filter((char) => char !== null)
					.map((char) => ({
						...char,
						...additionalInfo[char.name],
					}));
				setCharacters(charactersWithInfo);
			} catch (error) {
				setError("Failed to load characters. Please try again later.");
			}
		};

		fetchAllCharacters();
	}, []);

	useEffect(() => {
		if (alerts.length > 0 && !currentAlert) {
			setCurrentAlert(alerts[0]);
		}
	}, [alerts, currentAlert]);

	const handleCloseSnackbar = () => {
		setCurrentAlert(null);
		setAlerts((prev) => prev.slice(1));
	};

	const showAlert = useCallback((message, severity) => {
		setAlerts((prev) => [...prev, { message, severity }]);
	}, []);

	const getNewMission = useCallback(() => {
		setCrew([]);
		setCurrentMission(getRandomMission());
		setAttempts(0);
	}, []);

	const onSelectCrew = useCallback(
		(character) => {
			if (crew.length === 3) {
				showAlert(
					"Crew is full! Maximum 3 members allowed.",
					"warning"
				);
				return;
			}

			if (crew.includes(character)) {
				showAlert(`${character.name} is already in the crew!`, "info");
				return;
			}

			setCrew([...crew, character]);
			showAlert(
				`${character.name} has been added to the crew!`,
				"success"
			);
		},
		[crew, showAlert]
	);

	const removeFromCrew = useCallback(
		(character) => {
			setCrew(crew.filter((c) => c.id !== character.id));
			showAlert(
				`${character.name} has been removed from the crew.`,
				"info"
			);
		},
		[crew, showAlert]
	);

	const calculateCrewRating = useCallback(() => {
		if (crew.length === 0) return 0;
		const totalRating = crew.reduce((sum, member) => {
			const rating = parseInt(member.rating.split("/")[0]);
			return sum + rating;
		}, 0);
		return totalRating / crew.length;
	}, [crew]);

	const calculateSuccessProbability = useCallback(() => {
		if (crew.length !== 3) return 0;

		const crewRating = calculateCrewRating();
		const missionDifficulty = currentMission.difficulty;

		let probability = 50;

		const ratingDifference = crewRating - missionDifficulty;
		probability += ratingDifference * 10;

		const randomFactor = Math.random() * 10 - 5;
		probability += randomFactor;

		probability = Math.max(5, Math.min(95, probability));

		return probability;
	}, [crew.length, calculateCrewRating, currentMission.difficulty]);

	const attemptMission = useCallback(() => {
		if (crew.length !== 3) {
			showAlert(
				"You need exactly 3 crew members to attempt the mission!",
				"warning"
			);
			return;
		}

		const newAttempts = attempts + 1;
		setAttempts(newAttempts);

		const crewRating = calculateCrewRating();
		const missionDifficulty = currentMission.difficulty;
		const successProbability = calculateSuccessProbability();
		const success = Math.random() * 100 < successProbability;

		const result = {
			success,
			message: success
				? `Mission Success! (${successProbability.toFixed(0)}% chance)`
				: `Mission Failed! Had ${successProbability.toFixed(
						0
				  )}% chance of success`,
			mission: currentMission,
			crew: [...crew],
			timestamp: new Date().toISOString(),
		};

		setMissionResult(result);
		showAlert(result.message, result.success ? "success" : "error");

		if (success) {
			setTimeout(() => {
				setCrew([]);
				setCurrentMission(getRandomMission());
				setAttempts(0);
			}, 3000);
		} else if (newAttempts >= MAX_ATTEMPTS) {
			showAlert(
				`No more attempts left! Getting a new mission...`,
				"warning"
			);
			setTimeout(getNewMission, 2000);
		}
	}, [
		crew,
		currentMission,
		calculateCrewRating,
		calculateSuccessProbability,
		showAlert,
		attempts,
		getNewMission,
	]);

	if (error) {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
					gap: 2,
				}}
			>
				<Typography color="error">{error}</Typography>
				<Button
					variant="contained"
					onClick={() => window.location.reload()}
				>
					Retry
				</Button>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				minWidth: "100vw",
				backgroundImage: `url("https://img.goodfon.com/original/1920x1080/0/9d/futurama-futurama-planet.jpg")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
				paddingTop: 10,
			}}
		>
			<Container>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						padding: 2,
						backgroundColor: "rgba(7, 7, 7, 0.7)",
						borderRadius: "8px",
						border: "4px solid #7FFFD4",
						color: "white",
					}}
				>
					Current Mission
					<Typography
						variant="subtitle1"
						sx={{
							color: attempts >= MAX_ATTEMPTS ? "red" : "white",
							mt: 1,
						}}
					>
						Attempts: {attempts}/{MAX_ATTEMPTS}
					</Typography>
				</Typography>
				<MissionCard mission={currentMission} />
				<CrewSection
					crew={crew}
					onSelectCrew={onSelectCrew}
					onRemove={removeFromCrew}
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: 2,
						my: 3,
						padding: 3,
					}}
				>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={attemptMission}
						disabled={crew.length !== 3 || attempts >= MAX_ATTEMPTS}
					>
						{missionResult && !missionResult.success
							? "Retry Mission"
							: "Attempt Mission"}
					</Button>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						onClick={getNewMission}
						sx={{
							color: "white",
						}}
					>
						New Mission
					</Button>
				</Box>
				<Typography
					variant="h4"
					sx={{
						marginTop: 3,
						textAlign: "center",
						backgroundColor: "rgba(7, 7, 7, 0.7)",
						padding: "10px",
						borderRadius: "8px",
						border: "4px solid #7FFFD4",
						color: "white",
					}}
				>
					Available Crew
				</Typography>
				<Grid container spacing={2} sx={{ marginTop: 1 }}>
					{characters.map((character) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							key={character.id}
							padding={4}
						>
							<CrewCard
								character={character}
								onSelectCrew={onSelectCrew}
								isSelected={crew.some(
									(c) => c.id === character.id
								)}
								isAvailableCrew={true}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
			<Snackbar
				open={!!currentAlert}
				autoHideDuration={2500}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				{currentAlert && (
					<Alert
						onClose={handleCloseSnackbar}
						severity={currentAlert.severity}
						sx={{ width: "100%" }}
					>
						{currentAlert.message}
					</Alert>
				)}
			</Snackbar>
		</Box>
	);
};

export default Game;
