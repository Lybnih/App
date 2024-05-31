import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tela: {
        alignItems: "center",
        backgroundColor: "#286D50",
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 26,
        color: "white",
        padding: 16,
    },
    lista: {
        marginTop: 60,
    },
    card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        borderRadius: 20,
        padding: 5,
    },
    tituloCard: {
        height: 60,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 5,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        color: "black",
        padding: 2,
        paddingVertical: 5,
    },
    imgProd: {
        padding: 3,
        borderRadius: 9,
        height: 260,
        width: 170,
    },

    
    imgModal: {
        borderRadius: 20,
        height: 200,
        width: 200,
    }, 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});