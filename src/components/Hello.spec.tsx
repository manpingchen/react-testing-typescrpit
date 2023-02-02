import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import React from "react";

it("renders 'Hello World'", () => {
  render(<Hello />);
  const helloWorldElement = screen.getByText(/Hello World/);
  screen.debug();
  expect(helloWorldElement).toBeInTheDocument();
});
