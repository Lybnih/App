import React from 'react';
import { Image, View, ScrollView, ImageBackground, TouchableOpacity  } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Texto from '../../componentes/Texto.js';
import styles from './estilo.js';
import Mock from '../../mocks/sobre_nos.js';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const navigation = useNavigation();

    React.useEffect(() => {
        if (video.current) {
            video.current.playAsync();
        }
    }, [video]);


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
                                    style={styles.video}
                                    source={require('../../../assets/sobre/livraria_video.mp4')}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                    shouldPlay={true}
                                    isLooping
                                    onPlaybackStatusUpdate={status => setStatus(() => status)} 
                                />
                            </View>

                            <View style={styles.botaoContainer}>
                                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Formulario')}>
                                    <Texto style={styles.textoBotao}>Entre em Contato !</Texto>
                                </TouchableOpacity>
                            </View>

                            </View>
                        </View>
                </ScrollView>
            </ImageBackground>
        </View>

    );
}

