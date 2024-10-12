// src/components/Filter.tsx
import React from "react";

interface FilterProps {
  setFilter: (filter: string) => void;
}

const FilterTodo: React.FC<FilterProps> = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
    </div>
  );
};

export default FilterTodo;
