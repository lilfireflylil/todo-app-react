type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
