import { useTodosContext } from "../lib/hooks";

function Counter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default Counter;
