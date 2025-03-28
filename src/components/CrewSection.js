import React from "react";
import { Grid, Typography } from "@mui/material";
import CrewCard from "./CrewCard";
import CrewSkeleton from "./CrewSkeleton";

const CrewSection = ({ crew, onSelectCrew, onRemove }) => {
	return (
		<>
			<Typography variant="h4" sx={{ 
				marginTop: 3, 
				textAlign: 'center',
				backgroundColor: "rgba(7, 7, 7, 0.7)",
				padding: "10px", 
				borderRadius: "8px",
				border: "4px solid #7FFFD4",
				color: "white",
				}}>
				Selected Crew
			</Typography>
			<Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 3}}>
				{crew.map((character) => (
					<Grid item xs={12} sm={6} md={4} key={character.id} padding={4}>
						<CrewCard
							character={character}
							onSelectCrew={onSelectCrew}
							isSelected={true}
							onRemove={onRemove}
							sx={{
								padding:5,
							}}
						/>
					</Grid>
				))}
				{[...Array(3 - crew.length)].map((_, index) => (
					<Grid item xs={12} sm={6} md={4} key={`skeleton-${index}`} padding={4}>
						<CrewSkeleton />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default CrewSection;
