import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
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
 
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width:'50%',
    height: '100%',
  },
  imagem: {
    width: '100%',
    height:'78%',
    alignSelf: 'center',
  },
  card: {
    alignItems: "center",
    width: "85%",
    height: 190,
    margin: 16,
    borderRadius: 15,
  },
  tituloCard: {
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        padding: 5,
        marginTop: 2,
    },

    //   tituloCard: {
    //     fontSize: 18,
    //     fontWeight: "bold",
    //     marginTop: 10,
    //     textAlign: "center",
    //   },
    //   flatListContainer: {
    //     padding: 10,
    //   },
//   nomeProduto: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   textoLista: {
//     fontSize: 16,
//     paddingBottom: 10,
//   },
});