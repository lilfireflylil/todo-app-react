import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();
  return (
    <ul>
      {todos.length === 0 && (
        <li className="flex h-full items-center justify-center font-semibold">
          Start by adding a todo
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex h-12 cursor-pointer items-center justify-between border-b border-[#e0e0e0]/[80%] px-8 text-sm text-[#e0e0e0]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span className={todo.isCompleted ? "text-[#ccc] line-through" : ""}>
            {todo.text}
          </span>

          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
