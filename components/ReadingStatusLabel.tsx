import React from 'react';
import type { ReadingStatus } from '../types';

interface Props {
  status: ReadingStatus;
  className?: string;
}

const statusMap: Record<ReadingStatus, { label: string; color: string }> = {
  'lido': { label: 'Lido', color: 'bg-green-100 text-green-700 border-green-300' },
  'lendo': { label: 'Lendo', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  'nao-lido': { label: 'Não lido', color: 'bg-slate-100 text-slate-700 border-slate-300' },
};

const ReadingStatusLabel: React.FC<Props> = ({ status, className = '' }) => {
  const { label, color } = statusMap[status];

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded border ${color} ${className}`}>
      {label}
    </span>
  );
};

export default ReadingStatusLabel;