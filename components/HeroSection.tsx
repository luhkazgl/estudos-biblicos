import React from 'react';
import UpdateBanner from './UpdateBanner';

interface HeroSectionProps {
  lastUpdate: string;
  lastMessage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ lastUpdate, lastMessage }) => {
  return (
    <div
      className="relative py-24 md:py-32 rounded-lg overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url('https://picsum.photos/1200/800?image=1040')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {lastUpdate && <UpdateBanner date={lastUpdate} message={lastMessage} />}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
          Bem-vindo aos Estudos Bíblicos
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Que alegria ter você aqui! Você decidiu dedicar um tempo precioso para aprender mais sobre Deus através de Sua Palavra.
          Que este seja um momento de crescimento espiritual e descoberta das verdades eternas.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;