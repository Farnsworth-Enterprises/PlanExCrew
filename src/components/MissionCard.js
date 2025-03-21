import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const MissionCard = ({ mission }) => {
	return (
		<Card sx={{ height: "100%" }}>
			<CardContent>
				<Typography variant="h6" sx={{ fontWeight: "bold" }}>
					{mission.title} ({mission.episode})
				</Typography>
				<Typography variant="body1" sx={{ marginBottom: 1 }}>
					Delivery: {mission.delivery}
				</Typography>
				<Typography
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Difficulty:
					{Array.from({
						length: mission.difficulty,
					}).map((_, i) => (
						<StarIcon
							key={i}
							sx={{
								color: "#FFD700",
								fontSize: "1rem",
								marginLeft: "2px",
							}}
						/>
					))}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MissionCard;
