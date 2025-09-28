import React from 'react';

interface ChapterGridProps {
  total: number;
  selected: number | null;
  onSelect: (chapter: number) => void;
}

const ChapterGrid: React.FC<ChapterGridProps> = ({ total, selected, onSelect }) => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
      {Array.from({ length: total }, (_, i) => i + 1).map((chapter) => {
        const isActive = selected === chapter;
        return (
          <button
            key={chapter}
            onClick={() => onSelect(chapter)}
            className={`relative flex items-center justify-center h-12 w-12 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
              isActive
                ? 'bg-sky-600 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700'
            }`}
            title={`Estudar capítulo ${chapter}`}
            aria-pressed={isActive}
          >
            {chapter}
          </button>
        );
      })}
    </div>
  );
};

export default ChapterGrid;