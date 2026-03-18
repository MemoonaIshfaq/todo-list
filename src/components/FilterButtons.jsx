import React from 'react';

/**
 * FilterButtons Component
 * Presentational component that displays filter options
 * Shows buttons for All, Active, and Completed todos
 */
function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'ALL', label: 'All' },
    { key: 'ACTIVE', label: 'Active' },
    { key: 'COMPLETED', label: 'Completed' }
  ];

  return (
    <div className="filter-section">
      <span className="filter-label">Filter:</span>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
            aria-pressed={currentFilter === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterButtons;
