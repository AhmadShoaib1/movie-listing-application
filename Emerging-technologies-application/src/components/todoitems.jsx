function TodoItem(props) {
  const { todo, onToggle, onEdit, onDelete } = props;

  return (
    <li class="flex items-center gap-3 bg-white p-3 mb-3 rounded-lg shadow hover:shadow-md transition">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        class="accent-blue-600 focus:ring-blue-500 focus:ring-2 rounded"
      />
      <input
        class="border p-1 rounded flex-1 text-gray-800"
        value={todo.text}
        onInput={(e) => onEdit(todo.id, e.target.value)}
      />
      <button class="text-red-800 hover:underline text-sm" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
