import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import MissionCard from "./MissionCard";

export const missions = [
	{
		category: "Easy Deliveries (1–3 Difficulty)",
		items: [
			{
				title: "The Series Has Landed",
				episode: "S1E2",
				delivery: "A package to the moon.",
				difficulty: 2,
			},
			{
				title: "A Flight to Remember",
				episode: "S1E10",
				delivery: "A luxury cruise package to the Titanic spaceship.",
				difficulty: 2,
			},
			{
				title: "Fear of a Bot Planet",
				episode: "S1E5",
				delivery: "A package to a robot-controlled planet (Chapek 9).",
				difficulty: 3,
			},
			{
				title: "Xmas Story",
				episode: "S2E4",
				delivery: "Presents for orphans.",
				difficulty: 3,
			},
			{
				title: "Insane in the Mainframe",
				episode: "S3E11",
				delivery: "Bender and Fry drop off a package at a bank.",
				difficulty: 3,
			},
		],
	},
	{
		category: "Medium Deliveries (4–6 Difficulty)",
		items: [
			{
				title: "A Big Piece of Garbage",
				episode: "S1E8",
				delivery: "A bomb to destroy a giant garbage ball.",
				difficulty: 4,
			},
			{
				title: "The Deep South",
				episode: "S2E12",
				delivery: "A package to Atlanta (now underwater).",
				difficulty: 4,
			},
			{
				title: "Amazon Women in the Mood",
				episode: "S3E1",
				delivery: "A package to Amazonia.",
				difficulty: 5,
			},
			{
				title: "Godfellas",
				episode: "S3E20",
				delivery: "Routine mission, but Bender is lost in space.",
				difficulty: 5,
			},
			{
				title: "Love and Rocket",
				episode: "S4E4",
				delivery: "A shipment of candy hearts.",
				difficulty: 5,
			},
			{
				title: "Where the Buggalo Roam",
				episode: "S4E10",
				delivery: "A package to Mars.",
				difficulty: 5,
			},
			{
				title: "A Pharaoh to Remember",
				episode: "S4E7",
				delivery: "A giant statue to the planet Osiris IV.",
				difficulty: 6,
			},
			{
				title: "The Route of All Evil",
				episode: "S4E3",
				delivery: "Competing with kids’ delivery service.",
				difficulty: 6,
			},
			{
				title: "The Honking",
				episode: "S2E18",
				delivery: "A package to a haunted castle.",
				difficulty: 6,
			},
		],
	},
	{
		category: "Hard Deliveries (7–10 Difficulty)",
		items: [
			{
				title: "Roswell That Ends Well",
				episode: "S3E19",
				delivery:
					"A routine mission goes wrong due to accidental time travel.",
				difficulty: 7,
			},
			{
				title: "The Sting",
				episode: "S4E12",
				delivery: "Harvesting space honey from giant killer bees.",
				difficulty: 8,
			},
			{
				title: "Bender’s Big Score",
				episode: "Movie",
				delivery:
					"Various deliveries across time while battling scammers.",
				difficulty: 8,
			},
			{
				title: "The Late Philip J. Fry",
				episode: "S6E7",
				delivery:
					"Fry, Bender, and the Professor time travel too far forward.",
				difficulty: 9,
			},
			{
				title: "Three Hundred Big Boys",
				episode: "S5E16",
				delivery: "Fry delivers a package for 100 cups of coffee.",
				difficulty: 9,
			},
			{
				title: "Into the Wild Green Yonder",
				episode: "Movie",
				delivery:
					"Secret mission to stop the destruction of the universe.",
				difficulty: 10,
			},
		],
	},
];

const Missions = () => {
	return (
		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				backgroundImage: `url("https://i0.wp.com/the-avocado.org/wp-content/uploads/2022/07/831494-1.jpg?fit=1920%2C1080&quality=80&ssl=1")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<Container
				sx={{
					paddingTop: "100px",
					minHeight: "100vh",
					width: "100%",
					textAlign: "center",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: "2.5rem",
						fontWeight: "bold",
						marginBottom: "5px",
						color: "white",
            backgroundColor: "rgba(7, 7, 7, 0.7)",
            padding: "10px", 
            borderRadius: "8px",
            border: "4px solid #7FFFD4",
					}}
				>
					Planet Express Missions
				</Typography>
				<Box sx={{ padding: 4 }}>
					{missions.map((missionGroup) => (
						<Box
							key={missionGroup.category}
							sx={{ marginBottom: 4 }}
						>
							<Typography
								variant="h5"
								sx={{
									marginBottom: 2,
									fontWeight: "bold",
									color: "white",
                  backgroundColor: "rgba(7, 7, 7, 0.7)",
                  padding: "10px", 
                  borderRadius: "8px",
                  border: "2px solid white",
                  display: "inline-block",
								}}
							>
								{missionGroup.category}
							</Typography>
							<Grid container spacing={2}>
								{missionGroup.items.map((mission) => (
									<Grid
										item
										xs={12}
										sm={6}
										key={mission.title}
									>
										<MissionCard mission={mission} />
										{/* <Card sx={{ height: "100%" }}>
											<CardContent>
												<Typography
													variant="h6"
													sx={{ fontWeight: "bold" }}
												>
													{mission.title} (
													{mission.episode})
												</Typography>
												<Typography
													variant="body1"
													sx={{ marginBottom: 1 }}
												>
													Delivery: {mission.delivery}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														display: "flex",
														alignItems: "center",
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
																fontSize:
																	"1rem",
																marginLeft:
																	"2px",
															}}
														/>
													))}
												</Typography>
											</CardContent>
										</Card> */}
									</Grid>
								))}
							</Grid>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Missions;
