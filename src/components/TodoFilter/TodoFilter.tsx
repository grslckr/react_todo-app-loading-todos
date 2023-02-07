import cn from 'classnames';
import React from 'react';

type Props = {
  filter: string,
  onFilterClick: (filter: string) => void,
  renderClearCompleted: boolean,
};

export const TodoFilter: React.FC<Props> = ({
  filter,
  onFilterClick,
  renderClearCompleted,
}) => {
  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        3 items left
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={cn(
            'filter__link',
            { selected: filter === 'All' },
          )}
          onClick={() => onFilterClick('All')}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn(
            'filter__link',
            { selected: filter === 'Active' },
          )}
          onClick={() => onFilterClick('Active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn(
            'filter__link',
            { selected: filter === 'Completed' },
          )}
          onClick={() => onFilterClick('Completed')}
        >
          Completed
        </a>
      </nav>

      {renderClearCompleted && (
        <button
          type="button"
          className="todoapp__clear-completed"
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
