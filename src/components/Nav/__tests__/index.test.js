import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });

  // snapshots test
  
});
