import TodoInput from "./components/todoinput";

function App() {
  return (
    <main class="max-w-xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">📝 Todo List</h1>
      <TodoInput onAdd={(text) => console.log("Add:", text)} />
    </main>
  );
}

export default App;
