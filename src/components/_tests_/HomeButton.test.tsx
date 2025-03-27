import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeButton from "../atoms/HomeButton";
import { ThemeProvider } from "../../Context/ThemeContext";

describe("HomeButton Component", () => {
  const mockOnPress = jest.fn();

  const renderWithTheme = (props: any) =>
    render(
      <ThemeProvider>
        <HomeButton {...props} />
      </ThemeProvider>
    );

  it("renders correctly with label", () => {
    const { getByText } = renderWithTheme({
      label: "Test Button",
      onPress: mockOnPress,
      type: "films",
    });

    expect(getByText("Test Button")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByText } = renderWithTheme({
      label: "Press Me",
      onPress: mockOnPress,
      type: "people",
    });

    const button = getByText("Press Me");
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
