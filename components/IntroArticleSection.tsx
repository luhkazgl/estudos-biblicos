import React from 'react';
import IntroArticle from './IntroArticle';
import { introArticles } from '../data/articles';

const IntroArticleSection: React.FC = () => {
  const article = introArticles[0]; // Pode expandir para múltiplos no futuro

  return (
    <section className="bg-sky-50 py-16 md:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <IntroArticle
          title={article.title}
          description={article.description}
          image={article.image}
          link={article.link}
        />
      </div>
    </section>
  );
};

export default IntroArticleSection;