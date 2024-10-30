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
  },

  cardContainer: {
    marginVertical: 10,
  },
  card: {
    width: '100%', 
    borderRadius: 15,
    backgroundColor: '#D9E4D5', 
    borderWidth: 2,
    borderColor: '#286D50', 
    padding: 5,
    justifyContent: 'space-between'
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "left",
    flex:1,
    marginTop: 5,
    left: 59,
    top: 7,
  },
  trashIconContainer: {
    position: 'absolute',
    top: 15,
    right: 1,
  },
  
  flatListContainer: {
    padding: 30,
    width: '100%',
  },

  bookIconContainer: {
    width: '100%',
    alignItems: 'left',
    left: 7,
    bottom: 12,
    display: 'flex',
  },

  botao:{
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "#286D50",
    borderRadius: 5,
    padding: 10,
  }

});
