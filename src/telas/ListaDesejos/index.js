import React, { useState, useEffect}  from "react";
import { View, FlatList, ImageBackground, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import Texto from '../../componentes/Texto';
import ListaItem from './ListaItem.js';
import styles from './estilo.js'; 
import Botao from "../../componentes/Botao";

export default function ListaDesejos(){

     const [listData, setListData] = useState([]);

    //Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, [])

    const navigation = useNavigation();

     //Função para limpar a lista de desejos
     const clearAsyncStorage = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert('Lista de desejos foi excluída com sucesso.');
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }

    return (
        <View style={styles.tela}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
                <FlatList
                    data={listData}
                    renderItem={({ item }) => <ListaItem {...item} />}
                    keyExtractor={({ id }) => String(id)}
                    numColumns={1}
                    contentContainerStyle={styles.flatListContainer} // Adicione este estilo
                />
                {/* <Botao textoBotao={"Apagar Lista"} clickBotao={()=> clearAsyncStorage()} ></Botao> */}
            </ImageBackground>
        </View>
    );
}