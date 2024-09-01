import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
	test("renders TodoList and checks for initial todos", () => {
		render(<TodoList />);
		const todoItems = screen.getAllByRole("listitem");
		expect(todoItems.length).toBe(2); // Check for initial todos
	});

	test("adds a new todo", () => {
		render(<TodoList />);
		const inputElement = screen.getByPlaceholderText("Add new todo");
		const buttonElement = screen.getByText("Add");
		fireEvent.change(inputElement, { target: { value: "New Todo" } });
		fireEvent.click(buttonElement);
		const newTodo = screen.getByText("New Todo");
		expect(newTodo).toBeInTheDocument();
	});

	test("toggles a todo", () => {
		render(<TodoList />);
		const todoItem = screen.getByText("Learn React");
		fireEvent.click(todoItem);
		expect(todoItem).toHaveTextContent("(Completed)");
	});

	test("deletes a todo", () => {
		render(<TodoList />);
		const deleteButton = screen.getAllByText("Delete")[0];
		fireEvent.click(deleteButton);
		expect(screen.queryByText("Learn React")).toBeNull();
	});
});
