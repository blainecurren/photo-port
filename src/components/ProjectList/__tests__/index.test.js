import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectList from "..";

afterEach(cleanup);

describe("ProjectList is rendering", () => {
  it("renders", () => {
    render(<ProjectList />);
  });

  it("renders", () => {
    const { asFragment } = render(<ProjectList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
