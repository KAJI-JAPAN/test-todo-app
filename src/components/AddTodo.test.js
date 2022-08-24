import { fireEvent, render, screen } from "@testing-library/react";
import { AddTodo } from "./AddTodo";

describe("AddTodo", () => {
  it("render input element", () => {
    render(<AddTodo />);
    const inputElemnt = screen.getByPlaceholderText(/Add new Task/i)
    expect(inputElemnt).toBeInTheDocument();
  });

  it('input element should change', () => {
    render(<AddTodo />)
    const inputElemnt = screen.getByPlaceholderText(/Add New Task/i)
    fireEvent.change(inputElemnt, {
      target: {value: 'Learn Testing Library'}
    })
    expect(inputElemnt.value).toBe('Learn Testing Library')
  });

  it('input text should remove where add button click', () => {
    render(<AddTodo setTodos={jest.fn()} />)
    const inputElement = screen.getByPlaceholderText(/Add New Task/i)
    fireEvent.change(inputElement, {
      target: { value: 'Learn Testing Library' }  
    })
    const buttonElement = screen.getByRole('button', { name: '追加' }) 

    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
  })
});
