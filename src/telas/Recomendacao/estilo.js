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

    container: {
    flex: 1,
    padding: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  autor: {
    fontSize: 16,
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 14,
  },
});