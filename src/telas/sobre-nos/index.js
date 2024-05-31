import React from 'react';
import { Image, View, ScrollView, ImageBackground } from 'react-native';
import Texto from '../../componentes/Texto.js';
import styles from './estilo.js';
import Mock from '../../mocks/sobre_nos.js';

export default function Sobre() {
    return (


        <View style={styles.tela}>
            <Texto style={styles.titulo}>{Mock.topo.titulo}</Texto>
            <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <View style={styles.contentContainer}>
                            <Image source={Mock.topo.imagem} style={styles.logo} resizeMode='contain' />
                            <Texto style={styles.texto}>{Mock.topo.txt}</Texto>
                            <Image source={Mock.topo.img_local} style={styles.imagem} resizeMode='contain' />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>

    );
}