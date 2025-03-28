import React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

const CrewSkeleton = () => (
	<Card
		sx={{
			display: "flex",
			flexDirection: "column",
			height: "100%",
			width: "100%",
			alignItems: "center",
			border: "1px solid #ccc",
			borderRadius: "12px",
			padding: 2,
			backgroundColor: "white",
		}}
	>
		<Skeleton variant="text" width={120} height={32} sx={{ mb: 2 }} />
		<Skeleton
			variant="rectangular"
			width={120}
			height={120}
			sx={{ mb: 2, borderRadius: 1 }}
		/>
		<CardContent
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Skeleton variant="text" width={80} height={24} />
		</CardContent>
	</Card>
);

export default CrewSkeleton;
