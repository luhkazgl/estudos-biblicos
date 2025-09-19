
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <div
        className="relative py-24 md:py-32 rounded-lg overflow-hidden bg-cover bg-center text-center"
        style={{ backgroundImage: `url('https://picsum.photos/1200/800?image=1040')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Explore as Escrituras
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            Mergulhe profundamente na Palavra de Deus com nossos guias de estudo detalhados, criados para iluminar sua mente e aquecer seu coração.
          </p>
          <Link
            to="/estudos"
            className="mt-8 inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-700 transition-transform transform hover:scale-105"
          >
            Começar Estudo
          </Link>
        </div>
      </div>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Por Que Estudar a Bíblia?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-2">Alimento para a Alma</h3>
            <p className="text-slate-600">A Palavra de Deus é nosso pão espiritual. Ela nos nutre, fortalece nossa fé e nos guia em todas as áreas da vida.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-2">Luz para o Caminho</h3>
            <p className="text-slate-600">Em um mundo de incertezas, as Escrituras são uma lâmpada para nossos pés, oferecendo sabedoria divina e direção clara.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-2">Fonte de Esperança</h3>
            <p className="text-slate-600">Na Bíblia, encontramos as promessas de Deus, que nos enchem de esperança, paz e a certeza de um futuro glorioso em Cristo.</p>
          </div>
        </div>
      </section>

      {/* New Trial Section */}
      <section className="bg-sky-50 py-16 md:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/800/600?image=24" alt="Mesa de estudo com uma Bíblia aberta" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Experimente um Estudo Guiado</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                  Não sabe por onde começar? Mergulhe em nosso estudo de Marcos, capítulo 5. Explore a poderosa história do homem endemoninhado de Gerasa e a comovente ressurreição da filha de Jairo. Uma jornada de fé e descoberta espera por você.
                  </p>
                  <Link
                  to="/estudos/marcos"
                  className="inline-block bg-slate-800 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-900 transition-transform transform hover:scale-105"
                  >
                  Estudar Marcos 5
                  </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
