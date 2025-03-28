import React from "react";
import { Grid, Typography } from "@mui/material";
import CrewCard from "./CrewCard";
import CrewSkeleton from "./CrewSkeleton";

const CrewSection = ({ crew, onSelectCrew, onRemove }) => {
	return (
		<>
			<Typography variant="h4" sx={{ marginTop: 3 }}>
				Selected Crew
			</Typography>
			<Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 3 }}>
				{crew.map((character) => (
					<Grid item xs={12} sm={6} md={4} key={character.id}>
						<CrewCard
							character={character}
							onSelectCrew={onSelectCrew}
							isSelected={true}
							onRemove={onRemove}
						/>
					</Grid>
				))}
				{[...Array(3 - crew.length)].map((_, index) => (
					<Grid item xs={12} sm={6} md={4} key={`skeleton-${index}`}>
						<CrewSkeleton />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default CrewSection;
