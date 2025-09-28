import React, { useState } from 'react';
import { OSTUDIES } from '../constants';
import StudyCard from '../components/StudyCard';
import StudyFilter from '../components/StudyFilter';

const OtherStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Extrai todas as tags únicas
  const availableTags = Array.from(
    new Set(OSTUDIES.flatMap((study) => study.tags))
  );

  // Filtra por título e tag
  const filteredStudies = OSTUDIES.filter((study) => {
    const matchesTitle = study.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || study.tags.includes(selectedTag);
    return matchesTitle && matchesTag;
  });

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Outros Estudos</h1>
        <p className="mt-2 text-lg text-slate-600">
          Explore estudos temáticos e artigos que aprofundam sua compreensão da Palavra de Deus.
        </p>
      </div>

      <StudyFilter
        searchTerm={searchTerm}
        selectedTag={selectedTag}
        onSearchChange={setSearchTerm}
        onTagChange={setSelectedTag}
        availableTags={availableTags}
      />

      <div className="space-y-6">
        {filteredStudies.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>

      <div className="text-center p-8 bg-slate-100 rounded-lg mt-8">
        <h3 className="text-xl font-semibold text-slate-700">Mais Artigos em Desenvolvimento</h3>
        <p className="text-slate-500 mt-2">
          Estamos preparando novos conteúdos temáticos para esta seção. Volte em breve para mais estudos edificantes!
        </p>
      </div>
    </div>
  );
};

export default OtherStudiesPage;