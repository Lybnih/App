// src/telas/produto/estilo.js

import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    tela: {
        flex:1,
        alignItems: "center",
        backgroundColor: '#286D50',
    },
    titulo: {
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        color: 'white',
        padding: 16,
    },
    container: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    topo: {
        width: "100%",
        height: (700 / 1000) * width,
        marginTop: 50,
    },
    produto: {
        paddingHorizontal: 25,
    },
    nome: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
        color: "#BB2233",
        marginTop: 12,
        marginBottom: 2,
    },
    descricao: {
        fontWeight: "bold",
        textAlign: "justify",
        fontSize: 17,
        color: "black",
    },
    preco: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 17,
        color: "#BB2233",
        marginTop: 8,
    },
    botao: {
        backgroundColor: '#286D50',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    
    titulo2:{
        width: "100%",
        textAlign: "center",
        fontSize: 40,
        marginTop: 10,
        fontWeight: "bold",
        padding: 5,
        marginTop: 55,
    },
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderTopWidth: 4,
        borderColor:"#286D50",
        paddingVertical: 16,
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    nomep: {
        fontSize: 25,
        color: "black",
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "bold",
    },
    imagem: {
        width: 230,
        height: 230,
    }

});
