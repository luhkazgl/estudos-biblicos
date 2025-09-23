
import React from 'react';
import { Link } from 'react-router-dom';

const OtherStudiesPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Outros Estudos</h1>
        <p className="mt-2 text-lg text-slate-600">
          Explore estudos temáticos e artigos que aprofundam sua compreensão da Palavra de Deus.
        </p>
      </div>

      <div className="space-y-6">
        {/* O que é a Bíblia - Available article */}
        <Link 
          to="/outros-estudos/o-que-e-a-biblia"
          className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3 h-48 md:h-auto">
              <img 
                src="https://wallpaperaccess.com/full/1129786.jpg" 
                alt="Bíblia aberta" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                O que é a Bíblia?
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Uma introdução fundamental sobre a natureza, composição e importância da Bíblia como Palavra de Deus. 
                Descubra como 66 livros escritos ao longo de mais de 1000 anos formam uma mensagem unificada.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Introdução</span>
                  <span className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Fundamentos</span>
                  <span className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Bíblia</span>
                </div>
                <span className="text-sky-600 font-semibold text-sm group-hover:text-sky-700">
                  Ler Artigo →
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Coming Soon Articles */}
        <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden opacity-75">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3 h-48 md:h-auto">
              <img 
                src="https://picsum.photos/400/300?image=24" 
                alt="Estudo bíblico" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Como Estudar a Bíblia
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Métodos práticos e eficazes para aprofundar seu estudo das Escrituras. 
                Aprenda técnicas de interpretação, meditação e aplicação da Palavra de Deus em sua vida.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Métodos</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Interpretação</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Prática</span>
                </div>
                <span className="text-slate-500 text-sm">
                  Em breve
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden opacity-75">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3 h-48 md:h-auto">
              <img 
                src="https://picsum.photos/400/300?image=24" 
                alt="História bíblica" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                História da Bíblia
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                A fascinante jornada da Bíblia através dos séculos. Desde sua composição original 
                até como chegou até nós hoje, preservada pela providência divina.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">História</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Preservação</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Transmissão</span>
                </div>
                <span className="text-slate-500 text-sm">
                  Em breve
                </span>
              </div>
            </div>
          </div>
        </div>
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
