import React from 'react';
import { StyleSheet, StatusBar, Image, Dimensions} from 'react-native';

import Header from "../../../../assets/produtos/divina_comedia.webp";
import Texto from "../../../componentes/Texto";

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;


export default function Topo({titulo}){
    return <>
        <StatusBar/>
        <Image source={Header} style={styles.topo}></Image>
        <Texto style={styles.titulo}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1000 / 1000 * width,
        marginTop: 70,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 16,
        marginTop: 10,
        fontWeight: "bold",
    },
  });