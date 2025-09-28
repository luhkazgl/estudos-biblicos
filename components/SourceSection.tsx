import React from 'react';
import SourceList from './SourceList';
import { sources } from '../data/sources';

const SourceSection: React.FC = () => {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 max-w-5xl mx-auto -mt-12 relative z-10">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Fontes e Créditos</h2>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <SourceList title="Fontes Principais" items={sources.principais} />
        <SourceList title="Fontes Adicionais" items={sources.adicionais} size="sm" />
      </div>
      <div className="mt-6 pt-4 border-t border-white/20">
        <p className="text-slate-200 text-sm text-center">
          <strong>Nota:</strong> Este material é uma coleção de estudos reunidos e adaptados das fontes mencionadas acima, bem como em materiais de autoria própria.
          Todos os direitos reservados aos respectivos autores e organizações.
          Este conteúdo é apresentado tão somente para fins educacionais e de edificação espiritual.
        </p>
      </div>
    </div>
  );
};

export default SourceSection;