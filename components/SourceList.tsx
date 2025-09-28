import React from 'react';

interface SourceListProps {
  title: string;
  items: string[];
  size?: 'sm' | 'md';
}

const SourceList: React.FC<SourceListProps> = ({ title, items, size = 'md' }) => {
  const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2';
  const dotColor = size === 'sm' ? 'bg-sky-300' : 'bg-sky-400';
  const textSize = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <div>
      <h3 className="text-white font-semibold mb-3 text-lg">{title}</h3>
      <ul className={`space-y-2 text-slate-200 ${textSize}`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className={`${dotSize} ${dotColor} rounded-full mr-3`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceList;