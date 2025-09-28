import React, { useEffect, useState } from 'react';
import HeroWithSources from '../components/HeroWithSources';
import WhyStudySection from '../components/WhyStudySection';
import IntroArticleSection from '../components/IntroArticleSection';

const HomePage: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState('');
  const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/luhkazgl/estudos-biblicos/commits?per_page=1')
      .then(res => res.json())
      .then(data => {
        if (data && data[0]?.commit) {
          const date = new Date(data[0].commit.committer.date);
          setLastUpdate(date.toLocaleDateString('pt-BR'));

          let message = data[0].commit.message;
          if (message.startsWith('Merge pull request')) {
            const parts = message.split('\n').map(p => p.trim()).filter(Boolean);
            message = parts[parts.length - 1];
          }

          setLastMessage(message);
        }
      })
      .catch(err => console.error('Erro ao buscar última atualização:', err));
  }, []);

  return (
    <div>
      <HeroWithSources lastUpdate={lastUpdate} lastMessage={lastMessage} />
      <WhyStudySection />
      <IntroArticleSection />
    </div>
  );
};

export default HomePage;