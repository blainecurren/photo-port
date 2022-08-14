import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // First Test -- checks to see if component renders
  it("renders", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
