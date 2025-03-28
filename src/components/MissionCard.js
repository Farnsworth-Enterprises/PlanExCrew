import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const MissionCard = ({ mission }) => {
	return (
		<Box sx={{ paddingTop: 3 }}>
			<Card sx={{ height: "100%" }}>
				<CardContent>
					<Typography
						variant="h6"
						sx={{ fontWeight: "bold", textAlign: "center" }}
					>
						{mission.title} ({mission.episode})
					</Typography>
					<Typography
						variant="body1"
						sx={{ marginBottom: 1, textAlign: "center" }}
					>
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
								data-testid="StarIcon"
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
		</Box>
	);
};

export default MissionCard;
