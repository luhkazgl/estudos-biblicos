import React from 'react';
import VerseCard from './VerseCard';
import { verses } from '../data/verses';

const WhyStudySection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Por Que Estudar a Bíblia?</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {verses.map((verse, index) => (
          <VerseCard
            key={index}
            title={verse.title}
            quote={verse.quote}
            reference={verse.reference}
            description={verse.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyStudySection;