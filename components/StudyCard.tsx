import React from 'react';
import { Link } from 'react-router-dom';
import type { OtherStudy } from '../types';

interface StudyCardProps {
  study: OtherStudy;
}

const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const isAvailable = !!study.link;

  const Wrapper = isAvailable ? Link : 'div';
  const wrapperProps = isAvailable ? { to: study.link } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block bg-white rounded-lg shadow-md transition-all duration-300 border border-slate-200 overflow-hidden ${
        isAvailable ? 'hover:shadow-lg' : 'opacity-75'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img
            src={study.image}
            alt={study.title}
            className={`w-full h-full object-cover ${
              isAvailable ? 'group-hover:scale-105 transition-transform duration-300' : ''
            }`}
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h3
            className={`text-xl font-bold text-slate-800 mb-2 ${
              isAvailable ? 'group-hover:text-sky-600 transition-colors' : ''
            }`}
          >
            {study.title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">{study.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {study.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded ${
                    isAvailable ? 'bg-sky-50 text-sky-700' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className={`text-sm ${
                isAvailable
                  ? 'text-sky-600 font-semibold group-hover:text-sky-700'
                  : 'text-slate-500'
              }`}
            >
              {isAvailable ? 'Ler Artigo →' : 'Em breve'}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StudyCard;