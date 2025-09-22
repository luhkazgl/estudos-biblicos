import React from 'react';

const DestaquesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Destaques</h1>
        <p className="mt-2 text-lg text-slate-600">
          Versículos em destaque dos livros com estudos disponíveis.
        </p>
      </div>

      {/* João */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-sky-500 pb-2">João</h2>
        
        <div className="space-y-8">
          {/* João 3:16-17 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                  3:16-17
                </span>
              </div>
              <div className="flex-grow">
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 italic">
                  "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele."
                </blockquote>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <em>Esse texto é a pregação do evangelho (as boas-novas), declara que Deus encarnou como homem (Jesus) para sofrer a penalidade da nossa culpa, em nosso lugar, revelando o amor de Deus para sua criação através da salvação imerecida por Deus, Cristo Jesus.</em>
                </p>
              </div>
            </div>
          </div>

          {/* João 14:6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                  14:6
                </span>
              </div>
              <div className="flex-grow">
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 italic">
                  "Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida, ninguém vem ao Pai, senão por mim"
                </blockquote>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <em>A declaração clara de Quem Jesus É, o único caminho, a única verdade e a única vida. Que a única possibilidade de salvação é por Jesus.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lucas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-sky-500 pb-2">Lucas</h2>
        
        <div className="space-y-8">
          {/* Lucas 2:10-11 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                  2:10-11
                </span>
              </div>
              <div className="flex-grow">
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 italic">
                  "E o anjo lhes disse: Não temais, porque eis aqui vos trago novas de grande alegria, que será para todo o povo: Pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor."
                </blockquote>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <em>Esse texto expõe a mensagem principal do livro de Lucas, que O Salvador, O Cristo, O Senhor, como homem veio para <strong>todos</strong>, para os oprimidos, cativos, doentes, párias, desprezados, gentios, estrangeiros, judeus, livres, pobres, ricos, sãos, em suma, Ele veio para os pecadores oferecer misericórdia para todos os homens.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marcos */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-sky-500 pb-2">Marcos</h2>
        
        <div className="space-y-8"> */}
          {/* Marcos 5:19 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                  5:19
                </span>
              </div>
              <div className="flex-grow">
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 italic">
                  "Jesus, porém, não lho permitiu, mas disse-lhe: Vai para tua casa, para os teus, e anuncia-lhes quão grandes coisas o Senhor te fez, e como teve misericórdia de ti."
                </blockquote>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <em>Após ser libertado dos demônios, o homem queria seguir Jesus, mas Ele o enviou para testemunhar em sua própria casa. Isso mostra que nosso testemunho pessoal é valioso e que devemos compartilhar o que Deus fez em nossas vidas.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default DestaquesPage;
