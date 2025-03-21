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
			}}
		>
			<CardContent
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						minHeight: "48px",
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						fontWeight: "bold",
					}}
				>
					{character.name}
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
								margin: "10px 0",
							}}
						/>
					)}
					{additionalInfo[character.name] && (
						<>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: "bold" }}
							>
								Rating: {additionalInfo[character.name].rating}
							</Typography>
							<div
								style={{
									textAlign: "left",
									marginTop: "8px",
								}}
							>
								{/* {additionalInfo[character.name].details.map(
									(point, index) => (
										<Typography
											key={index}
											variant="body2"
											sx={{
												marginTop: "4px",
											}}
										>
											{point}
										</Typography>
									)
								)} */}
							</div>
						</>
					)}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CrewCard;
