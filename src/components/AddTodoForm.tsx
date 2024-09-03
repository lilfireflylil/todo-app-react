import Button from "./Button";
import { useTodosContext } from "../lib/hooks";
import { useState } from "react";

function AddTodoForm() {
  const { handleAddTodo } = useTodosContext();
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] bg-[#f1f0f0] px-4 text-[14px] text-black"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
