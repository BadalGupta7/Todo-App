// import react from "React";
import { screen, fireEvent, render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("Todo App", () => {
  beforeEach(() => {
    cleanup();
    render(<App />);
  });
  test("adds a task successfully", () => {
    //render(<App />);
    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Todo 1" } });
    fireEvent.click(button);

    expect(screen.getByText("Todo 1")).toBeInTheDocument();
  });

  test("edits a task successfully", async () => {
    //render(<App />);
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Edit this task" } });
    fireEvent.click(addButton);

    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue("Edit this task");
    fireEvent.change(editInput, { target: { value: "Task edited" } });

    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    expect(screen.getByText("Task edited")).toBeInTheDocument();
  });

  test("deletes a task successfully", () => {
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Task to delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });

  test("toggles task completion", () => {
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Complete this task" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("filters tasks: only completed tasks are shown", () => {
    //render(<App />);
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    const completedFilterButton = screen.getByText(/completed/i);
    fireEvent.click(completedFilterButton);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
  });

  test("filters tasks: only pending tasks are shown", () => {
    //render(<App />);
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    const pendingFilterButton = screen.getByText(/pending/i);
    fireEvent.click(pendingFilterButton);

    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  });
});
