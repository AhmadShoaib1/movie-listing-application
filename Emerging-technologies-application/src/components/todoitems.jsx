function TodoItem(props) {
  const { todo, onToggle, onEdit, onDelete } = props;

  return (
    <li class="mb-2 flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <input
        class="border p-1 flex-1"
        value={todo.text}
        onInput={(e) => onEdit(todo.id, e.target.value)}
      />
      <button class="text-red-800" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
