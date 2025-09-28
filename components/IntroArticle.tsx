import React from 'react';
import { Link } from 'react-router-dom';

interface IntroArticleProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const IntroArticle: React.FC<IntroArticleProps> = ({ title, description, image, link }) => {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        <Link
          to={link}
          className="inline-block bg-slate-800 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-900 transition-transform transform hover:scale-105"
        >
          O que é a Bíblia?
        </Link>
      </div>
    </div>
  );
};

export default IntroArticle;