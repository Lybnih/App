import React from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons-Ionicons";
import styles from './estilo.js';
import { useNavigation } from '@react-navigation/native';

import Texto from "../../componentes/Texto";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Alert, TouchableOpacity } from "react-native";

export default function ListaItem({ id, nome }) {
    const navigation = useNavigation();

    async function removeProdListaDesejos(id){

    //Captura a lista de desejos
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

    //Organiza a lista de desejos em array
    const listaDesejos = JSON.parse(listaDesejosSalva);
    
    // Exclui o item e transforma em string para atualizar o AsyncStorage
    const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !== id));

     // Atualiza o AsyncStorage
     await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
     Alert.alert("Produto removido da lista de desejos.");
     console.log('produto removido');
     navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});

}

    return (
        <View style={styles.cardContainer}>
            <Card mode="contained" style={styles.card}>
                <Texto style={styles.tituloCard}>{nome}</Texto> 
                <View style={styles.cardContent}>
                    <View style={styles.bookIconContainer}>
                        <Ionicons name="book-outline" size={40} color="black" />
                    </View>
                    <View style={styles.trashIconContainer}>
                        <TouchableOpacity onPress={()=> removeProdListaDesejos(id)}>
                        <Ionicons name="trash" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    );
}
