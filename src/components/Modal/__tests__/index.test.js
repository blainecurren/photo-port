import react from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park Bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal Component", () => {
  it("renders", () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });
});

it("matches snapshot DOM node structure", () => {
  const { asFragment } = render(
    <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
  );
});
