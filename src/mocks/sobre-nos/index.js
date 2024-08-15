import React from 'react';
import { Image, View, ScrollView, ImageBackground, Button } from 'react-native';
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

                            <View style={styles.videoContainer}>
                                <Video
                                    ref={video}
                                    style={{ width: '100%', height: '100%' }} // Ocupe todo o espaço do container
                                    source={require('../../../assets/sobre/livraria_video.mp4')}
                                    resizeMode={ResizeMode.CONTAIN}
                                    isLooping
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>

    );
}

