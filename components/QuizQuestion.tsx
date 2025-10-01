import React from 'react';
import { CheckCircleIcon } from '@/components/icons/CheckCircleIcon';
import { XCircleIcon } from '@/components/icons/XCircleIcon';
import type { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  index: number;
  selected: number;
  showResult: boolean;
  correctIndex: number;
  onChange: (optionIdx: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question, index, selected, showResult, correctIndex, onChange
}) => (
  <li className="mb-6">
    <div className="flex items-center gap-2">
      <strong>Pergunta {index + 1}:</strong> {question.text}
      {showResult && (
        selected === correctIndex ? (
          <CheckCircleIcon className="inline h-5 w-5 text-green-600 ml-2" title="Correta" />
        ) : (
          <XCircleIcon className="inline h-5 w-5 text-red-600 ml-2" title="Incorreta" />
        )
      )}
    </div>
    <ul className="ml-4 mt-2">
      {question.options.map((opt, optIdx) => {
        let optionStyle = "";
        if (showResult) {
          if (optIdx === correctIndex) optionStyle = "bg-green-100 text-green-800 font-semibold";
          else if (selected === optIdx) optionStyle = "bg-red-100 text-red-800";
        }
        return (
          <li key={optIdx}>
            <label className={`flex items-center gap-2 rounded px-2 py-1 ${optionStyle}`}>
              <input
                type="radio"
                name={`question-${index}`}
                value={optIdx}
                disabled={showResult}
                checked={selected === optIdx}
                onChange={() => onChange(optIdx)}
                className="accent-sky-600"
              />
              {opt}
              {showResult && optIdx === correctIndex && (
                <span className="ml-1 text-green-600" title="Correta">✔️</span>
              )}
            </label>
          </li>
        );
      })}
    </ul>
  </li>
);

export default QuizQuestion;