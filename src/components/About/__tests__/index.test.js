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
});
