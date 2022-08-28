
export const TodoList = ({ todos, setTodos }) => {
  // タスク削除
  const handleRemoveTask = index => {
    // const taskName  = todos[index].task
    // if(window.confirm(`タスク「${taskName}」を削除しますか?`)) {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    // } else {
    //   return
    // }
  }

  // タスク更新
  const handleUpdateTask = index => {
    const newTodos = todos.map((todo, todoIndex) => {
      if(todoIndex === index) {
         todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'} : {} }
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(index)}
            />
            {todo.task}
            <span  onClick={() => handleRemoveTask(index)}>X</span>
          </li>
        ))}
      </ul>
  );
};
