
import React from 'react';

const OtherStudiesPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Outros Estudos</h1>
        <p className="mt-2 text-lg text-slate-600">
          Explore estudos temáticos e artigos que aprofundam sua compreensão da Palavra de Deus.
        </p>
      </div>

      <div className="text-center p-8 bg-slate-100 rounded-lg">
        <h3 className="text-xl font-semibold text-slate-700">Em Breve</h3>
        <p className="text-slate-500 mt-2">
          Estamos preparando novos conteúdos para esta seção. Volte em breve para mais estudos edificantes!
        </p>
      </div>
    </div>
  );
};

export default OtherStudiesPage;
