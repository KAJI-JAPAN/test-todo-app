import { useState } from "react";

export const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState("");

  const hundleNewTask = (e) => {
    setTask(e.target.value);
  };

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
  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input placeholder="Add New Task" value={task} onChange={hundleNewTask} />
      <button type="submit">追加</button>
    </form>
  );
};
