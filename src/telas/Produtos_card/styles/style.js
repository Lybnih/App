import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tela: {
        flex:1,
        backgroundColor: "#286D50",
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
        fontSize: 26,
        color: "white",
        padding: 16,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        borderRadius: 20,
        padding: 5,
    },
    tituloCard: {
        height: 50,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 3,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        fontWeight: "bold",
        color: "red",
        padding: 2,
        paddingVertical: 5,
    },
    imgProd: {
        padding: 3,
        borderRadius: 9,
        height: 250,
        width: 170,
    },

    // Estilos do Modal
    imgModal: {
        borderRadius: 8,
        height: 250,
        width: 170,
    }, 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 5,
        backgroundColor: '#F7F6F1',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 15,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 4,
        marginHorizontal: 0,
        margin: 6,
    },
    buttonClose: {
        color: '#fff',
        backgroundColor: 'grey'
    },
    buttonComprar:{
        backgroundColor: '#286D50',
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
        marginTop: 10, 
    }
});