import React from 'react';
import {FlatList, View, ImageBackground} from 'react-native';
import styles from "./styles/style";
import Texto from '../../componentes/Texto.js';
import CardProd from "./componentes/CardProd";
import Mock from '../../mocks/produtos_card';

export default function Catalogo() {
    return (
        <View style={styles.tela}>
            <Texto style={styles.titulo}>{Mock.card.titulo}</Texto>
            <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>

            <FlatList
                style={styles.lista}
                data={Mock.card.lista}
                renderItem={({ item }) => <CardProd item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            </ImageBackground>
        </View>
    );
}
