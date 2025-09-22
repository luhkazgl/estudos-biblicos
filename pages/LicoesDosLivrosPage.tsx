import React from 'react';
import { Link } from 'react-router-dom';

const LicoesDosLivrosPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Lições Dos Livros</h1>
        <p className="mt-2 text-lg text-slate-600">
          Descubra as principais lições e ensinamentos extraídos de cada livro da Bíblia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

        {/* Mateus - Coming soon */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 opacity-75">
          <h3 className="text-lg font-bold text-sky-700 mb-3">Mateus</h3>
          <p className="text-slate-600 text-sm mb-4">
            O Evangelho que apresenta Jesus como o Messias prometido e Rei dos Judeus.
          </p>
          <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Messias</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Reino</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Ensinamentos</div>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Em breve
          </div>
        </div>

        {/* Marcos - Coming soon */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 opacity-75">
          <h3 className="text-lg font-bold text-sky-700 mb-3">Marcos</h3>
          <p className="text-slate-600 text-sm mb-4">
            Um Evangelho dinâmico e cheio de ação, focado nos milagres e no serviço de Jesus.
          </p>
           <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Serviço</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Milagres</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Ação</div>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Em breve
          </div>
        </div>

        {/* Lucas - Available lesson */}
        <Link 
          to="/licoes-dos-livros/lucas"
          className="group block bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200"
        >
          <h3 className="text-lg font-bold text-sky-700 mb-3 group-hover:text-sky-600">Lucas</h3>
          <p className="text-slate-600 text-sm mb-4">
            O Evangelho que retrata Jesus como o Salvador compassivo de toda a humanidade.
          </p>
          <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Compaixão</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Oração</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Humanidade</div>
          </div>
          <div className="mt-4 text-xs text-sky-600 font-semibold group-hover:text-sky-700">
            Ver Lição →
          </div>
        </Link>
      
        {/* João - Available lesson */}
        <Link 
          to="/licoes-dos-livros/joao"
          className="group block bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200"
        >
          <h3 className="text-lg font-bold text-sky-700 mb-3 group-hover:text-sky-600">João</h3>
          <p className="text-slate-600 text-sm mb-4">
            O Evangelho que revela a divindade de Jesus e a unidade entre o Pai e o Filho.
          </p>
          <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Divindade</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Unidade</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Salvação</div>
          </div>
          <div className="mt-4 text-xs text-sky-600 font-semibold group-hover:text-sky-700">
            Ver Lição →
          </div>
        </Link>

      </div>

      {/* Gênesis - Coming soon */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 opacity-75">
          <h3 className="text-lg font-bold text-sky-700 mb-3">Gênesis</h3>
          <p className="text-slate-600 text-sm mb-4">
            O livro dos começos nos ensina sobre a criação, a queda do homem e as promessas de Deus.
          </p>
          <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Criação</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Fé</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Promessas</div>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Em breve
          </div>
        </div> */}

        {/* Salmos - Coming soon */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 opacity-75">
          <h3 className="text-lg font-bold text-sky-700 mb-3">Salmos</h3>
          <p className="text-slate-600 text-sm mb-4">
            Uma coleção de cânticos que nos ensina sobre adoração, oração e relacionamento com Deus.
          </p>
          <div className="space-y-2">
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Adoração</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Oração</div>
            <div className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">Louvores</div>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Em breve
          </div>
        </div> */}

      <div className="text-center p-8 bg-slate-100 rounded-lg">
        <h3 className="text-xl font-semibold text-slate-700">Mais Lições em Desenvolvimento</h3>
        <p className="text-slate-500 mt-2">
          Estamos preparando lições detalhadas para todos os livros da Bíblia. 
          Cada lição incluirá os principais temas, versículos-chave e aplicações práticas.
        </p>
      </div>
    </div>
  );
};

export default LicoesDosLivrosPage;
