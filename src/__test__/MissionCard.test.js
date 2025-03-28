import React from "react";
import { render, screen } from "@testing-library/react";
import MissionCard from "../components/MissionCard";

describe("MissionCard Component", () => {
	const mockMission = {
		title: "Test Mission",
		episode: "S01E01",
		delivery: "Test Delivery",
		difficulty: 3,
	};

	test("renders MissionCard with all mission details", () => {
		render(<MissionCard mission={mockMission} />);

		// Check if title and episode are displayed
		expect(screen.getByText("Test Mission (S01E01)")).toBeInTheDocument();

		// Check if delivery is displayed
		expect(screen.getByText("Delivery: Test Delivery")).toBeInTheDocument();

		// Check if difficulty stars are rendered
		const stars = screen.getAllByTestId("StarIcon");
		expect(stars).toHaveLength(3);
	});

	test("renders correct number of difficulty stars", () => {
		const missionWithDifferentDifficulty = {
			...mockMission,
			difficulty: 5,
		};

		render(<MissionCard mission={missionWithDifferentDifficulty} />);

		const stars = screen.getAllByTestId("StarIcon");
		expect(stars).toHaveLength(5);
	});

	test("renders with zero difficulty stars", () => {
		const missionWithZeroDifficulty = {
			...mockMission,
			difficulty: 0,
		};

		render(<MissionCard mission={missionWithZeroDifficulty} />);

		const stars = screen.queryAllByTestId("StarIcon");
		expect(stars).toHaveLength(0);
	});
});
