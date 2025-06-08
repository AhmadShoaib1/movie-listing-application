function FilterButtons(props) {
  const options = ['all', 'completed', 'incomplete'];

  return (
    <div class="flex gap-2 mb-4">
      {options.map((option) => (
        <button
          class={`px-3 py-1 border rounded 
            ${props.currentFilter === option ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => props.onFilterChange(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
