import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const DifficultyDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label>Difficulty: </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="any">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultyDropdown;
