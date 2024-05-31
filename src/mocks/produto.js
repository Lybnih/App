import Logo from "../../assets/favicon.png";
import livro_1 from "../../assets/produtos/livro_1.png";
import livro_2 from "../../assets/produtos/livro_2.png";
import livro_3 from "../../assets/produtos/livro_3.png";


const produto = {
    topo: {
        titulo: "Box",
    },
    detalhes: {
        nome: "Box A Divina Comédia",
        logo: Logo,
        detalhes: "A Divina Comédia é uma trilogia escrita por Dante Alighieri no século XIV, composta por Inferno, Purgatório e Paraíso. Dante, guiado por Virgílio e mais tarde por Beatriz, explora os reinos além-túmulo. Cada parte possui 33 cantos, totalizando 100 ao longo da jornada espiritual de Dante.",
        preco: "R$ 78,90",
        botao: "Adicionar Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nomep: "Inferno",
                imagem: livro_1,
            },
            {
                nomep: "Purgatório",
                imagem: livro_2,
            },
            {
                nomep: "Paraíso",
                imagem: livro_3, 
            },
        ],
    }
}

export default produto;