import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProdutoCard = ({ nome, valor, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.valor}>{valor}</Text>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.botaoTexto}>Comprar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valor: {
    fontSize: 14,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#286D50',
    padding: 8,
    borderRadius: 5,
  },
  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ProdutoCard;
