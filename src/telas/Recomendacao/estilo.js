import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
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

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookImage: { 
    marginTop: 5,
    width: 215, 
    height: 320, 
    resizeMode: 'cover',
    marginBottom: 20 
  },
  title: { 
    marginTop: 40,
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'center' 
  },
  author: { 
    fontSize: 16, 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  description: { 
    fontSize: 14, 
    textAlign: 'center', 
    marginBottom: 10 
  },
  publishedDate: { 
    fontSize: 12, 
    color: 'gray', 
    textAlign: 'center', 
    marginBottom:10,
  },
  errorText: { 
    fontSize: 16, 
    color: 'red', 
    textAlign: 'center' 
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,
  },
});