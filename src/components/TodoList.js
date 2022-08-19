import { useState } from "react";

export const TodoList = () => {
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
  const [task, setTask] = useState("");

  const hundleNewTask = (e) => {
    setTask(e.target.value)
  }

  // タスク追加
  const handleSubmit = (event) => {
    // preventDefaultでデフォルトのイベントを停止 https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
    event.preventDefault();
    // タスクがからの場合はreturnで何もしない
    if (task === "") return;
    // setTodosで入力した文字（task）をtodosに追加。スプレッド構文でTodoリストの一番後ろに新しく追加
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    // 入力欄を空にする
    setTask("");
  };

  // タスク削除
  const handleRemoveTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1> Todo List </h1>
      <form onSubmit={handleSubmit}>
        Add Task :
        <input
          placeholder="Add New Task"
          value={task}
          onChange={hundleNewTask}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo.task} <span  onClick={() => handleRemoveTask(index)}>X</span> </li>
        ))}
      </ul>
    </div>
  );
};
