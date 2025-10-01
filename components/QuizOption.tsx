import React from 'react';

interface QuizOptionProps {
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
  highlight?: 'correct' | 'incorrect' | undefined;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  label,
  checked,
  disabled,
  onChange,
  highlight,
}) => {
  let optionStyle = '';
  if (highlight === 'correct') optionStyle = 'bg-green-100 text-green-800 font-semibold';
  if (highlight === 'incorrect') optionStyle = 'bg-red-100 text-red-800';

  return (
    <label className={`flex items-center gap-2 rounded px-2 py-1 ${optionStyle}`}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="accent-sky-600"
      />
      {label}
    </label>
  );
};

export default QuizOption;