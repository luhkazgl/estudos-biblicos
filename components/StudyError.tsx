import React from 'react';

interface Props {
  title: string;
  message: string;
}

const StudyError: React.FC<Props> = ({ title, message }) => (
  <div className="text-center p-8 bg-slate-100 rounded-lg">
    <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
    <p className="text-slate-500 mt-2">{message}</p>
  </div>
);

export default StudyError;