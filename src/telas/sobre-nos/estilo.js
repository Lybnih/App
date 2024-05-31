// src/telas/sobre-nos/estilo.js

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
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  texto: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  imagem: {
    width: 290,
    height: 290,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
});
