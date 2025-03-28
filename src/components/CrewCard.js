import React from "react";

import {
	Card,
	CardContent,
	Typography,
	IconButton,
	CardActionArea,
	Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const CrewCard = ({ character, onSelectCrew, isSelected, onRemove }) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "100%",
				alignItems: "center",
				border: isSelected ? "2px solid #4CAF50" : "1px solid #ccc",
				borderRadius: "12px",
				boxShadow: isSelected
					? "0 0 15px rgba(76, 175, 80, 0.3)"
					: "3px 3px 10px rgba(0, 0, 0, 0.1)",
				padding: 2,
				backgroundColor: "white",
				position: "relative",
				transition: "all 0.3s ease",
				"&:hover": {
					transform: "translateY(-5px)",
					boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
				},
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 8,
					right: 8,
					zIndex: 2,
				}}
			>
				{isSelected ? (
					<IconButton
						onClick={(e) => {
							e.stopPropagation();
							onRemove(character);
						}}
						sx={{
							color: "#f44336",
							"&:hover": {
								backgroundColor: "rgba(244, 67, 54, 0.1)",
							},
						}}
					>
						<CloseIcon />
					</IconButton>
				) : (
					<IconButton
						onClick={(e) => {
							e.stopPropagation();
							onSelectCrew(character);
						}}
						sx={{
							color: "#4CAF50",
							"&:hover": {
								backgroundColor: "rgba(76, 175, 80, 0.1)",
							},
						}}
					>
						<AddIcon />
					</IconButton>
				)}
			</Box>

			<CardActionArea
				onClick={() => !isSelected && onSelectCrew(character)}
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					
				}}
			>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: "bold",
						marginBottom: "8px",
						// color: isSelected ? "#2E7D32" : "inherit",
					}}
				>
					{character.name}
				</Typography>

				{character.image && (
					<img
						src={character.image}
						alt={character.name}
						style={{
							width: "120px",
							height: "120px",
							objectFit: "cover",
							objectPosition: "top",
							borderRadius: "8px",
						}}
					/>
				)}

				<CardContent
					sx={{
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						
					}}
				>
					{isSelected && (
						<Typography
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							{character.details[0]}
						</Typography>
					)}
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CrewCard;
