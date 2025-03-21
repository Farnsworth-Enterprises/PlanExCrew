import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (state) => () => {
		setOpen(state);
	};

	return (
		<AppBar
			position="fixed"
			sx={{ backgroundColor: "#7FFFD4", color: "#000000" }}
		>
			<Toolbar>
				<Typography
					variant="h6"
					sx={{
						flexGrow: 1,
						textDecoration: "none",
						color: "black",
						fontWeight: "bold",
					}}
				>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
						>
						Home
					</Link>
				</Typography>

				<IconButton
					edge="end"
					color="inherit"
					onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					anchor="right"
					open={open}
					onClose={toggleDrawer(false)}
				>
					<List sx={{ width: 200 }}>
						{["Crew", "Missions", "About"].map((text) => (
							<ListItem
								button
								key={text}
								component={Link}
								to={`/${text.toLowerCase()}`}
								onClick={toggleDrawer(false)}
							>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
