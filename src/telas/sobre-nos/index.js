import React from 'react';
import { Image, View, ScrollView } from 'react-native';

import Texto from '../../componentes/Texto.js';
import styles from './estilo.js'
import Mock from '../../mocks/sobre_nos.js';

export default function Sobre() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={Mock.topo.imagem} style={styles.logo} resizeMode='contain' />
          <Texto style={styles.texto}>{Mock.topo.txt}</Texto>
          <Image source={Mock.topo.img_local} style={styles.imagem} resizeMode='contain' />
        </View>
      </View>
    </ScrollView>
  );
}
