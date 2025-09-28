import React from 'react';
import UpdateBanner from './UpdateBanner';
import SourceList from './SourceList';
import { sources } from '../data/sources';

interface HeroWithSourcesProps {
  lastUpdate: string;
  lastMessage: string;
}

const HeroWithSources: React.FC<HeroWithSourcesProps> = ({ lastUpdate, lastMessage }) => {
  return (
    <div className="relative bg-cover bg-center text-center" style={{ backgroundImage: `url('https://picsum.photos/1200/800?image=1040')` }}>
      {/* Fundo escurecido */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
        {lastUpdate && <UpdateBanner date={lastUpdate} message={lastMessage} />}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
          Bem-vindo aos Estudos Bíblicos
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Que alegria ter você aqui! Você decidiu dedicar um tempo precioso para aprender mais sobre Deus através de Sua Palavra.
          Que este seja um momento de crescimento espiritual e descoberta das verdades eternas.
        </p>

        {/* Bloco de fontes */}
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20">
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
      </div>
    </div>
  );
};

export default HeroWithSources;