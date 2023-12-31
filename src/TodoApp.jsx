import { useState } from "react";
import { useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId == 1) {
      return;
    }
    setTodoId(todoId - 1);
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <h4>isLoading : {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.complete ? "DONE" : "Pending"}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>
    </>
  );
};
