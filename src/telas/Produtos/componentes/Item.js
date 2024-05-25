import React from "react";
import {Image, View, StyleSheet} from 'react-native';

import Texto from "../../../componentes/Texto";

export default function Item({item:{nome, imagem}}){
    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain"/>
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 3,
        borderBottomColor: "#286D50",
        paddingVertical: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 16,
        color: "#BB2233",
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "bold",
    },
    imagem: {
        width: 230,
        height: 230,
    }
})