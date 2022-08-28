import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "../Todo";

describe("Todo", () => {
  it("should render header tag title", () => {
    render(<Todo />);
    const headingElement = screen.getByRole("heading", { name: /Todo List/i });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render default three todos", () => {
    render(<Todo />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(3);
  });

  it("should render 4 todos where i add new task", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    const buttonElement = screen.getByRole("button", { name: "追加" });
    userEvent.type(inputElement, "Learn Testing Libary");
    userEvent.click(buttonElement);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(4);
  });

  it("should have style after i add new task and check checkbox", () => {
    render(<Todo />)
    const inputElement = screen.getByPlaceholderText(/add new task/i)
    const buttonElement = screen.getByRole('button', { name: "追加" })

    userEvent.type(inputElement, 'Learn Testing Libary')
    userEvent.click(buttonElement)

    const listElement = screen.getByText(/Learn Testing Libary/i);
    // eslint-disable-next-line testing-library/no-node-access
    userEvent.click(listElement.querySelector('input'));

    expect(listElement).toHaveStyle('text-decoration-line: line-through;');
  })

  it('should delete task when i click delete X', () => {
    render(<Todo />)
    
    const inputElement = screen.getByPlaceholderText(/add new task/i)
    const buttonElement = screen.getByRole('button', { name: "追加" })
    
    userEvent.type(inputElement, 'Learn Testing Libary')
    userEvent.click(buttonElement)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
    
    const listElement = screen.getByText(/Learn Testing Libary/i)
    // eslint-disable-next-line testing-library/no-node-access
    userEvent.click(listElement.querySelector('span'))
     
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  
});
