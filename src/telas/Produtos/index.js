import React from "react";
import { StatusBar, Image, Dimensions, View, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Topo from "../../../assets/produtos/divina_comedia.png";

import Texto from "../../componentes/Texto";
import Item from "./componentes/Item";
import Mock from '../../mocks/produto';
import styles from './estilo';


const width = Dimensions.get('screen').width;



export default function Produto() {

    const handleButtonPress = () => {
        Alert.alert(
            "Em breve",
            "Esta funcionalidade estará disponível em futuras atualizações.",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed"),
                },
            ],
            { cancelable: false }
        );
    };

    return (

        <View style={styles.tela}>
            <Texto style={styles.titulo}>{Mock.topo.titulo}</Texto>
            <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>

                <View style={styles.container}>
                
                    <FlatList
                        data={Mock.itens.lista}
                        renderItem={Item}
                        keyExtractor={(item) => item.nomep}
                        ListHeaderComponent={() => (
                            <View style={styles.produto}>
                                <StatusBar />
                                <Image source={Topo} style={styles.topo} resizeMode='contain' />
                                <View style={styles.logotipo}>
                                    <Texto style={styles.nome}>{Mock.detalhes.nome}</Texto>
                                </View>
                                <Texto style={styles.descricao}>{Mock.detalhes.detalhes}</Texto>
                                <Texto style={styles.preco}>{Mock.detalhes.preco}</Texto>

                                <TouchableOpacity style={styles.botao} onPress={handleButtonPress}>
                                    <Texto style={styles.botaoTexto}>{Mock.detalhes.botao}</Texto>
                                </TouchableOpacity>
                                
                                <Texto style={styles.titulo2}>{Mock.itens.titulo}</Texto>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

