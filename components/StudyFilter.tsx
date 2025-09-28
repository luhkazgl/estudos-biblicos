import React from 'react';

interface StudyFilterProps {
  searchTerm: string;
  selectedTag: string;
  onSearchChange: (value: string) => void;
  onTagChange: (tag: string) => void;
  availableTags: string[];
}

const StudyFilter: React.FC<StudyFilterProps> = ({
  searchTerm,
  selectedTag,
  onSearchChange,
  onTagChange,
  availableTags,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 w-full max-w-md"
      />

      <select
        value={selectedTag}
        onChange={(e) => onTagChange(e.target.value)}
        className="px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 w-full max-w-xs"
      >
        <option value="">Todas as tags</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StudyFilter;