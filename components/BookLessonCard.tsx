import React from 'react';
import { Link } from 'react-router-dom';
import type { BookLesson } from '../types';

interface Props {
  lesson: BookLesson;
}

const BookLessonCard: React.FC<Props> = ({ lesson }) => {
  const isAvailable = !!lesson.link;
  const Wrapper = isAvailable ? Link : 'div';
  const wrapperProps = isAvailable ? { to: lesson.link } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block bg-white p-6 rounded-lg shadow-md transition-all duration-300 border border-slate-200 ${
        isAvailable ? 'hover:shadow-lg hover:-translate-y-1' : 'opacity-75'
      }`}
    >
      <h3 className={`text-lg font-bold text-sky-700 mb-3 ${isAvailable ? 'group-hover:text-sky-600' : ''}`}>
        {lesson.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4">{lesson.description}</p>
      <div className="space-y-2">
        {lesson.tags.map((tag, index) => (
          <div key={index} className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">
            {tag}
          </div>
        ))}
      </div>
      <div className={`mt-4 text-xs ${isAvailable ? 'text-sky-600 font-semibold group-hover:text-sky-700' : 'text-slate-500'}`}>
        {isAvailable ? 'Ver Lição →' : 'Em breve'}
      </div>
    </Wrapper>
  );
};

export default BookLessonCard;