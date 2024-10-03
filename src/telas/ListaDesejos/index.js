import React, { useState, useEffect}  from "react";
import { View, FlatList, ImageBackground} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto';
import ListaItem from './ListaItem.js';
import styles from './estilo.js'; 

export default function ListaDesejos(){

    const [listData, setListData] = useState([]);

    //Função para capturar os dados do async storage
    const loadListData = async () => {
        const storageObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storageObjectJSON !== null){
            const storageObject = JSON.parse(storageObjectJSON);
            setListData(storageObject);
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, [])


    return (
        <View style={styles.tela}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
                <FlatList
                    data={listData}
                    renderItem={({ item }) => <ListaItem {...item} />}
                    keyExtractor={({ id }) => String(id)}
                    numColumns={2}
                    contentContainerStyle={styles.flatListContainer} // Adicione este estilo
                />
            </ImageBackground>
        </View>
    );
}