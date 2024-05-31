import prod1 from '../../assets/produtos/livro9.jpg';
import prod2 from '../../assets/produtos/livro10.jpg';
import prod3 from '../../assets/produtos/livro11.jpg';
import prod4 from '../../assets/produtos/livro12.jpg';
import prod5 from '../../assets/produtos/livro_2.png';
import prod6 from '../../assets/produtos/livro_1.png';

const produtos = {
  card: {
    titulo: "Livros",
    lista: [
      {
        imagem: prod1,
        nome: "Diário de um Banana",
        valor: 'R$ 51,09',
      },
      {
        imagem: prod2,
        nome: "O Hobbit",
        valor: 'R$ 45,75',
      },
      {
        imagem: prod3,
        nome: "A Arte da Guerra",
        valor: 'R$ 48,70',
      },
      {
        imagem: prod4,
        nome: "Percy Jackson",
        valor: 'R$ 350,00',
      },
      {
        imagem: prod5,
        nome: "Purgatório",
        valor: 'R$ 13,93',
      },
      {
        imagem: prod6,
        nome: "Inferno",
        valor: 'R$ 54,90',
      },
   ],
  }
};

export default produtos;
