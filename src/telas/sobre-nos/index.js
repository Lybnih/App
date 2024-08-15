import React from 'react';
import { Image, View, ScrollView, ImageBackground } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Texto from '../../componentes/Texto.js';
import styles from './estilo.js';
import Mock from '../../mocks/sobre_nos.js';

export default function Sobre() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

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
                            
                            <Video
                                ref={video}
                                style={styles.video}
                                source={{
                                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                                }}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            />

                            </View>
                        </View>
                </ScrollView>
            </ImageBackground>
        </View>

    );
}

