import React from "react";
import {Image, View} from 'react-native';

import Texto from "../../../componentes/Texto";
import styles from '../estilo';

export default function Item({item:{nomep, imagem}}){
    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain"/>
        <Texto style={styles.nomep}>{nomep}</Texto>
    </View>
}
