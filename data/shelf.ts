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
    title: 'Quem é você quando ninguém está olhando',
    author: 'Bill Hybels',
    description: 'Livro sobre integridade e caráter pessoal.',
    image: 'https://m.media-amazon.com/images/I/615Fz86o3YL._SY342_.jpg',
    status: 'lido',
    comingSoon: true, 
    rating: 4,
  },

];