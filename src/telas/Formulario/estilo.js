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
  contentContainer: {
    width: '100%', 
    paddingHorizontal: 20,
    alignItems: 'center',
  },  
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#286D50', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    fontSize: 18,
  },
  voltarBotao: {
    position: 'absolute', 
    top: 20, 
    left: 20, 
    backgroundColor: '#5F9EA0',
    borderRadius: 10,
    padding: 10,
  },
});