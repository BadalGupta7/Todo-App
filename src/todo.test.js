// import react from "React";
import { screen, fireEvent, render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("test add todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Add Todo");
  const button = screen.getByText("ADD");
  fireEvent.change(input, { target: { value: "Todo Test" } });
  fireEvent.click(button);
  expect(screen.getByText("Todo Test")).toBeInTheDocument();
});

// test("marks a task as completed", () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText("Add Todo");
//   const button = screen.getByText("ADD");
//   fireEvent.change(input, { target: { value: "Todo Test" } });
//   fireEvent.click(button);

//   const checkbox = screen.getByRole("checkbox");
//   fireEvent.click(checkbox);

//   expect(checkbox).toBeChecked();
// });
