import React from 'react';

interface Props {
  reference: string;
  text: string;
  commentary: string;
}

const HighlightCard: React.FC<Props> = ({ reference, text, commentary }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
          {reference}
        </span>
      </div>
      <div className="flex-grow">
        <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 italic">
          "{text}"
        </blockquote>
        <p className="text-slate-600 text-sm leading-relaxed">
          <em>{commentary}</em>
        </p>
      </div>
    </div>
  </div>
);

export default HighlightCard;