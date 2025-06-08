import { createSignal } from "solid-js";
import TodoInput from "./components/todoinput";
import FilterButtons from "./components/filterbutton";
import TodoList from "./components/todolist";

function App() {
  const [filter, setFilter] = createSignal("all");
  const [todos, setTodos] = createSignal([]);

  const addTodo = (text) =>
    setTodos([...todos(), { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos(todos().map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const editTodo = (id, newText) =>
    setTodos(todos().map((t) => (t.id === id ? { ...t, text: newText } : t)));

  const deleteTodo = (id) =>
    setTodos(todos().filter((t) => t.id !== id));

  const filteredTodos = () => {
    if (filter() === "completed") return todos().filter((t) => t.completed);
    if (filter() === "incomplete") return todos().filter((t) => !t.completed);
    return todos();
  };

  return (
    <main class="max-w-xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">📝 Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <FilterButtons
        currentFilter={filter()}
        onFilterChange={(newFilter) => setFilter(newFilter)}
      />
      <TodoList
        todos={filteredTodos()}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </main>
  );
}

export default App;
