import TodoInput from "./components/todoinput";
import { createSignal } from "solid-js";
import FilterButtons from "./components/filterbutton";

function App() {
    const [Filter, setFilters] = createSignal("all");
  return (
    <main class="max-w-xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">📝 Todo List</h1>
      <TodoInput onAdd={(text) => console.log("Add:", text)} />
        <FilterButtons
            currentFilter={Filter()}
            onFilterChange={(newfilter) => setFilters(newfilter)}/>
    </main>
  );
}

export default App;
