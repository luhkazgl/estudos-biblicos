
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <div
        className="relative py-24 md:py-32 rounded-lg overflow-hidden bg-cover bg-center text-center"
        style={{ backgroundImage: `url('https://picsum.photos/1200/800?image=1040')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Bem-vindo aos Estudos Bíblicos
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            Que alegria ter você aqui! Você decidiu dedicar um tempo precioso para aprender mais sobre Deus através de Sua Palavra. 
            Que este seja um momento de crescimento espiritual e descoberta das verdades eternas.
          </p>
          
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Fontes e Créditos</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg">Fontes Principais</h3>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                    Enduring Word por David Guzik
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                    Strong's Concordance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                    Grace to You (Study Bible)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg">Fontes Adicionais</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Charles Spurgeon (Projetos Spurgeon)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Blue Letter Bible
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Bible Project por Tim Mackie
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Dois dedos de teologia por Yago Martins
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Estilo Adoração
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    respostas.com.br
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full mr-3"></span>
                    Jesuseabiblia por Diego Nascimento
                  </li>
                </ul>
              </div>
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

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Por Que Estudar a Bíblia?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-3">Alimento para a Alma</h3>
            <blockquote className="text-slate-700 italic mb-3 text-sm border-l-4 border-sky-500 pl-3">
              "Não só de pão viverá o homem, mas de toda palavra que sai da boca de Deus."
            </blockquote>
            <cite className="text-sky-600 text-xs block mb-3">Mateus 4:4</cite>
            <p className="text-slate-600 text-sm">A Palavra de Deus é nosso pão espiritual. Ela nos nutre, fortalece nossa fé e nos guia em todas as áreas da vida.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-3">Luz para o Caminho</h3>
            <blockquote className="text-slate-700 italic mb-3 text-sm border-l-4 border-sky-500 pl-3">
              "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos."
            </blockquote>
            <cite className="text-sky-600 text-xs block mb-3">Salmos 119:105</cite>
            <p className="text-slate-600 text-sm">Em um mundo de incertezas, as Escrituras são uma lâmpada para nossos pés, oferecendo sabedoria divina e direção clara.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-sky-700 text-lg mb-3">Fonte de Esperança</h3>
            <blockquote className="text-slate-700 italic mb-3 text-sm border-l-4 border-sky-500 pl-3">
              "Porque tudo o que dantes foi escrito, para nosso ensino foi escrito, para que pela paciência e consolação das Escrituras tenhamos esperança."
            </blockquote>
            <cite className="text-sky-600 text-xs block mb-3">Romanos 15:4</cite>
            <p className="text-slate-600 text-sm">Na Bíblia, encontramos as promessas de Deus, que nos enchem de esperança, paz e a certeza de um futuro glorioso em Cristo.</p>
          </div>
        </div>
      </section>

      {/* Introduction Article Section */}
      <section className="bg-sky-50 py-16 md:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="https://wallpaperaccess.com/full/1129786.jpg" alt="Bíblia aberta em uma mesa de estudo" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Comece com o Básico</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                  Antes de mergulhar nos estudos bíblicos, entenda o que é a Bíblia e por que ela é tão importante. 
                  Descubra como 66 livros escritos ao longo de mais de 1000 anos formam uma mensagem unificada de amor e salvação.
                  </p>
                  <Link
                  to="/outros-estudos/o-que-e-a-biblia"
                  className="inline-block bg-slate-800 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-900 transition-transform transform hover:scale-105"
                  >
                  O que é a Bíblia?
                  </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
