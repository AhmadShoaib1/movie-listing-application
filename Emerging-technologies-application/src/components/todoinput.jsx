import { createSignal } from 'solid-js';

function TodoInput(props) {
  const [input, setInput] = createSignal('');
  const [error, setError] = createSignal('');

  const handleAdd = () => {
    const trimmed = input().trim();
    if (!trimmed){
        setError('Task cannot be empty');
        return;
    }
    props.onAdd(trimmed);
    setInput('');
  };

  return (
    <div class="mb-6">
    <div class="flex gap-3 mb-4">
      <input
        class="flex-1 border border-gray-300 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a new task..."
        value={input()}
        onInput={(e) => setInput(e.target.value)}
      />
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition" onClick={handleAdd}>
        Add
      </button>
    </div>
    {error() && (<p class="text-red-600 mt-2 text-sm">{error()}</p>)}
    </div>
  );
}

export default TodoInput;
