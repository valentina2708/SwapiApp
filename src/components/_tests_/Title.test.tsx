import React from "react";
import { render } from "@testing-library/react-native";
import Title from "../atoms/Title";
import { ThemeProvider } from "../../Context/ThemeContext";

describe("Title Component", () => {
  const renderWithTheme = (props: any) =>
    render(
      <ThemeProvider>
        <Title {...props} />
      </ThemeProvider>
    );

  it("renders correctly with text", () => {
    const { getByText } = renderWithTheme({ children: "Hello World" });

    expect(getByText("Hello World")).toBeTruthy();
  });

  it("applies correct styles for 'home' variant", () => {
    const { getByText } = renderWithTheme({ children: "Home Title", variant: "home" });

    const title = getByText("Home Title");

    const stylesArray = Array.isArray(title.props.style) ? title.props.style.flat() : [title.props.style];

    expect(stylesArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 28, textAlign: "center" }),
      ])
    );
  });

  it("applies correct styles for 'detalles' variant", () => {
    const { getByText } = renderWithTheme({ children: "Detail Title", variant: "detalles" });

    const title = getByText("Detail Title");

    const stylesArray = Array.isArray(title.props.style) ? title.props.style.flat() : [title.props.style];

    expect(stylesArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 24, textAlign: "center", padding: 10 }),
      ])
    );
  });
});
