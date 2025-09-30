import type { ShelfBook } from '../types';

export const shelf: ShelfBook[] = [
  {
    id: 'o-peregrino',
    title: 'O peregrino',
    author: 'John Bunyan',
    description: 'É uma alegoria cristã clássica que narra a jornada de Cristão, um homem que deixa a “Cidade da Destruição” em busca da Cidade Celestial. Ao longo do caminho, ele enfrenta perigos, tentações e provações que simbolizam os desafios da vida espiritual, encontrando personagens que representam virtudes e vícios humanos. A obra, escrita no século XVII, tornou-se um dos livros mais lidos da literatura religiosa, transmitindo uma mensagem atemporal sobre fé, perseverança e esperança na salvação.',
    image: 'https://m.media-amazon.com/images/I/71gXLFmxiuL._UF1000,1000_QL80_.jpg',
    bannerImage: 'https://ogimg.infoglobo.com.br/in/23701384-292-d87/FT1500A/690/Dia16-05.jpg',
    status: 'lido',
    comingSoon: false,
    rating: 4,
    readLink: 'https://cavcomunidade.wordpress.com/wp-content/uploads/2017/10/o-peregrino-john-bunyan.pdf',
  },
  {
    id: 'quem-e-voce-quando-ninguem-esta-olhando',
    title: 'Quem é você quando ninguém está olhando?',
    author: 'Bill Hybels',
    description: 'Este livro é um convite à reflexão sobre caráter e integridade. Bill Hybels parte da pergunta provocadora: “Quem somos quando não há ninguém para nos observar?” A obra mostra que, muitas vezes, agimos corretamente apenas quando nossa reputação está em jogo, mas o verdadeiro caráter se revela nos momentos em que não há plateia.',
    image: 'https://m.media-amazon.com/images/I/81B2MomMmKL._SL1500_.jpg',
    status: 'lido',
    comingSoon: true, 
    rating: 5,
  },
  {
    id: 'em-seus-passos-o-que-faria-jesus',
    title: 'Em seus passos o que faria Jesus?',
    author: 'Charles Sheldon',
    description: 'Este livro é um clássico da literatura cristã que desafia os leitores a refletirem sobre suas ações diárias à luz dos ensinamentos de Jesus. A narrativa gira em torno de um grupo de pessoas que, inspiradas por uma pergunta provocadora, decidem viver suas vidas de acordo com o que acreditam que Jesus faria em suas situações. A obra aborda temas como ética, moralidade e responsabilidade social, incentivando os leitores a adotarem uma postura mais consciente e compassiva em suas vidas.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.hIX4xeXeDduSRjCn2Jx7JQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    status: 'lido',
    comingSoon: true, 
    rating: 5,
  },

];