import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CrewCard from "../components/CrewCard";

describe("CrewCard Component", () => {
	const mockCharacter = {
		name: "Test Character",
		image: "test-image.jpg",
		details: ["Test Detail 1", "Test Detail 2"],
	};

	const mockOnSelectCrew = jest.fn();
	const mockOnRemove = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("renders CrewCard with unselected state", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={false}
				onRemove={mockOnRemove}
				isAvailableCrew={true}
			/>
		);

		// Check if character name is displayed
		expect(screen.getByText("Test Character")).toBeInTheDocument();

		// Check if image is rendered
		const image = screen.getByAltText("Test Character");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", "test-image.jpg");

		// Check if add button is present
		const addButton = screen.getByTestId("add-crew-button");
		expect(addButton).toBeInTheDocument();
	});

	test("renders CrewCard with selected state", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={true}
				onRemove={mockOnRemove}
			/>
		);

		// Check if character name is displayed
		expect(screen.getByText("Test Character")).toBeInTheDocument();

		// Check if detail is displayed when selected
		expect(screen.getByText("Test Detail 1")).toBeInTheDocument();

		// Check if remove button is present
		const removeButton = screen.getByTestId("remove-crew-button");
		expect(removeButton).toBeInTheDocument();
	});

	test("calls onSelectCrew when Add button is clicked", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={false}
				onRemove={mockOnRemove}
				isAvailableCrew={true}
			/>
		);

		const addButton = screen.getByTestId("add-crew-button");
		fireEvent.click(addButton);
		expect(mockOnSelectCrew).toHaveBeenCalledWith(mockCharacter);
	});

	test("calls onRemove when Close button is clicked", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={true}
				onRemove={mockOnRemove}
			/>
		);

		const removeButton = screen.getByTestId("remove-crew-button");
		fireEvent.click(removeButton);
		expect(mockOnRemove).toHaveBeenCalledWith(mockCharacter);
	});

	test("calls onSelectCrew when card area is clicked in unselected state", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={false}
				onRemove={mockOnRemove}
				isAvailableCrew={true}
			/>
		);

		const cardArea = screen.getByTestId("crew-card-area");
		fireEvent.click(cardArea);
		expect(mockOnSelectCrew).toHaveBeenCalledWith(mockCharacter);
	});

	test("does not call onSelectCrew when card area is clicked in selected state", () => {
		render(
			<CrewCard
				character={mockCharacter}
				onSelectCrew={mockOnSelectCrew}
				isSelected={true}
				onRemove={mockOnRemove}
			/>
		);

		const cardArea = screen.getByTestId("crew-card-area");
		fireEvent.click(cardArea);
		expect(mockOnSelectCrew).not.toHaveBeenCalled();
	});
});
