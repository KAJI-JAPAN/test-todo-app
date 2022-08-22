import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const initialState = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <h1> Todo List </h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}