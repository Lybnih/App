import React from 'react';
import { FlatList, View } from 'react-native';
import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import CardProd from "./componentes/CardProd";
import Mock from '../../mocks/produtos_card'; // Importe o mock

export default function Catalogo() {
  return (
    <View style={styles.tela}>
      <Texto style={styles.titulo}>{Mock.card.titulo}</Texto>
      <FlatList
        style={styles.lista}
        data={Mock.card.lista}
        renderItem={CardProd}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};