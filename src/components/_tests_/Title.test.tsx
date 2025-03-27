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

  it("applies correct styles for 'home' variant", () => {
    const { getByText } = renderWithTheme({ children: "Home Title", variant: "home" });

    const title = getByText("Home Title");

    const stylesArray = Array.isArray(title.props.style) 
      ? title.props.style.flat(Infinity) 
      : [title.props.style];

    const mergedStyle = Object.assign({}, ...stylesArray);

    expect(mergedStyle).toMatchObject({
    
      textAlign: "center",
    });
  });

  it("applies correct styles for 'detalles' variant", () => {
    const { getByText } = renderWithTheme({ children: "Detail Title", variant: "detalles" });

    const title = getByText("Detail Title");

    const stylesArray = Array.isArray(title.props.style) 
      ? title.props.style.flat(Infinity) 
      : [title.props.style];

    const mergedStyle = Object.assign({}, ...stylesArray);

    expect(mergedStyle).toMatchObject({
      textAlign: "center",
      padding: 10,
    });
  });
});
