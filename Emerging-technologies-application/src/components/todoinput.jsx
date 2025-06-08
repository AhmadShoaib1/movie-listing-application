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
    <div class="mb-4">
    <div class="flex gap-2 mb-4">
      <input
        class="border p-2 flex-1"
        placeholder="Enter a new task..."
        value={input()}
        onInput={(e) => setInput(e.target.value)}
      />
      <button class="bg-blue-600 text-white px-4 py-2" onClick={handleAdd}>
        Add
      </button>
    </div>
    {error() && (<p class="text-red-600">{error()}</p>)}
    </div>
  );
}

export default TodoInput;
