import { StyleSheet , Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    container: {
        alignItems: "center", 
        backgroundColor: '#F7F6F1', // Defina a cor de fundo da tela
    },
    topo: {
        width: "100%",
        height: 1000 / 1000 * width, // Ajuste a altura da imagem
        marginTop: 70,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 16,
        marginTop: 10,
        zIndex: 1,
        fontWeight: "bold",
    },
    produto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "#BB2233",
        marginTop: 12,
        marginBottom: 10,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 18,
        color: "#A3A3A3",
        marginBottom: 10,
    },
    preco: {
        textAlign: "right",
        fontSize: 17,
        color: "black",
        marginTop: 8,
        color: "#BB2233",
    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 15,
    },

    logotipo: {
        flexDirection: "row",
        alignItems: "center",
    },
  });
  