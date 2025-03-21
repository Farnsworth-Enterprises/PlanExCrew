import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CrewCard = ({ character, additionalInfo }) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "100%",
				alignItems: "center",
				border: "1px solid #ccc",
				borderRadius: "12px",
				boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
				padding: 2, 
			}}
		>
			<Typography
				variant="h6"
				sx={{
					textAlign: "center",
					fontWeight: "bold",
					marginBottom: "8px",
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
						marginBottom: "8px",
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
					paddingBottom: 3, 
				}}
			>
				{additionalInfo[character.name] && (
					<Typography
						variant="subtitle1"
						sx={{
							fontWeight: "bold",
							marginTop: "auto",
						}}
					>
						Rating: {additionalInfo[character.name].rating}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};

export default CrewCard;
