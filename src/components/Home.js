import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Box
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundImage: `url("https://hallofbeorn.wordpress.com/wp-content/uploads/2023/10/futurama2.jpeg")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					position: "absolute",

					bottom: 45,
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
						fontWeight: "bold",
					}}
				>
					Create a crew and complete missions!
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
