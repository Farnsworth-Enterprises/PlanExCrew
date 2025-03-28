import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

const renderWithRouter = (component) => {
	return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("NavBar Component", () => {
	test("renders NavBar with Home link", () => {
		renderWithRouter(<NavBar />);
		expect(screen.getByText("Home")).toBeInTheDocument();
	});

	test("renders menu button", () => {
		renderWithRouter(<NavBar />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("opens drawer when menu button is clicked", () => {
		renderWithRouter(<NavBar />);

		// Initially drawer should be closed
		expect(screen.queryByText("Crew")).not.toBeInTheDocument();

		// Click menu button
		const menuButton = screen.getByRole("button");
		fireEvent.click(menuButton);

		// Drawer should be open with all navigation items
		expect(screen.getByText("Crew")).toBeInTheDocument();
		expect(screen.getByText("Missions")).toBeInTheDocument();
		expect(screen.getByText("About")).toBeInTheDocument();
		expect(screen.getByText("Game")).toBeInTheDocument();
	});

	test("navigation links have correct paths", () => {
		renderWithRouter(<NavBar />);

		// Open drawer
		const menuButton = screen.getByRole("button");
		fireEvent.click(menuButton);

		// Check if links have correct paths
		const crewLink = screen.getByText("Crew").closest("a");
		const missionsLink = screen.getByText("Missions").closest("a");
		const aboutLink = screen.getByText("About").closest("a");
		const gameLink = screen.getByText("Game").closest("a");

		expect(crewLink).toHaveAttribute("href", "/crew");
		expect(missionsLink).toHaveAttribute("href", "/missions");
		expect(aboutLink).toHaveAttribute("href", "/about");
		expect(gameLink).toHaveAttribute("href", "/game");
	});

	test("Home link has correct path", () => {
		renderWithRouter(<NavBar />);
		const homeLink = screen.getByText("Home").closest("a");
		expect(homeLink).toHaveAttribute("href", "/");
	});
});
