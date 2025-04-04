import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Box
			sx={{
				position: "fixed",
				width: "100vw",
				minHeight: "100vh",
				overflow: "hidden",
			}}
		>
			<Box
				component="img"
				src="https://hallofbeorn.wordpress.com/wp-content/uploads/2023/10/futurama2.jpeg"
				alt="Futurama Background"
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "stretch", // changes how the image scales
					zIndex: -1,
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: 150,
					left: 0,
					right: 0,
					textAlign: "center",
				}}
			>
				<Button
					variant="contained"
					color="error"
					size="large"
					sx={{
						fontSize: "2rem",
						padding: "12px 64px",
					}}
					component={Link}
					to="/game"
				>
					Start
				</Button>
				<Typography
					variant="h1"
					color="white"
					sx={{
						mt: 2,
						textDecoration: "underline",
						textShadow: "3px 3px 6px rgba(192, 17, 17, 0.8)",
						// backgroundColor: "rgba(7, 7, 7, 0.7)",
						// borderRadius: "8px",
						// padding: "10px",
						fontWeight: "bold",
						// border: "4px solid #7FFFD4",
						fontSize: {
							xs: "1.5rem", // Extra-small screens (phones)
							sm: "2rem",   // Small screens (tablets)
							md: "2.5rem", // Medium screens
							lg: "3rem",   // Large screens
							xl: "3.5rem", // Extra-large screens
						},
					}}
				>
					Create a crew and complete missions!
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
