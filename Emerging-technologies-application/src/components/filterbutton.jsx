function FilterButtons(props) {
    const options = ['all', 'completed', 'incomplete'];

    return (
        <div class="flex gap-2 mb-4">
            {options.map((option) => (
                <button
                    class={`px-4 py-2 rounded-full text-sm font-medium transition border ${props.currentFilter === option
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                    onClick={() => props.onFilterChange(option)}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
