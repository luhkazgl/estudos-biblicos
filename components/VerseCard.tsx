import React from 'react';

interface VerseCardProps {
  title: string;
  quote: string;
  reference: string;
  description: string;
}

const VerseCard: React.FC<VerseCardProps> = ({ title, quote, reference, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200">
      <h3 className="font-bold text-sky-700 text-lg mb-3">{title}</h3>
      <blockquote className="text-slate-700 italic mb-3 text-sm border-l-4 border-sky-500 pl-3">
        "{quote}"
      </blockquote>
      <cite className="text-sky-600 text-xs block mb-3">{reference}</cite>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

export default VerseCard;