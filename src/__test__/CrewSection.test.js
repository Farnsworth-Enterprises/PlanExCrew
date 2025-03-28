import { render, screen, cleanup } from "@testing-library/react";
import CrewSection from "../components/CrewSection";

test("renders CrewSection component", () => {
	const mockCrew = [
		{
			id: 1,
			name: "John Doe",
			image: "https://via.placeholder.com/150",
			details: ["Test Detail 1", "Test Detail 2"],
		},
		{
			id: 2,
			name: "Jane Smith",
			image: "https://via.placeholder.com/150",
			details: ["Test Detail 1", "Test Detail 2"],
		},
	];
	const mockOnSelectCrew = jest.fn();
	const mockOnRemove = jest.fn();

	render(
		<CrewSection
			crew={mockCrew}
			onSelectCrew={mockOnSelectCrew}
			onRemove={mockOnRemove}
		/>
	);
	const crewSectionElement = screen.getByText(/Selected Crew/i);
	expect(crewSectionElement).toBeInTheDocument();

	const crewCards = screen.getAllByTestId("crew-card");
	expect(crewCards).toHaveLength(mockCrew.length);
	cleanup();
});
