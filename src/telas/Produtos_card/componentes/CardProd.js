import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, Pressable, View, Image, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles/style.js";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function CardProd({ item: { id, nome, imagem, valor } }) {
    const [modalVisible, setModalVisible] = useState(false);

    async function addListaDesejos(id, nome, imagem){
        //Produto Favoritado
        const addProduto=[{
            id: id,
            nome: nome,
            imagem: imagem,
        }]

        //Verificar se a lista esta vazia
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if(listaDesejosSalva == null){
            //Lista Vazia, insere produto clicado
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Incluido com Sucesso na Lista de Desejos");
            console.log("Adicionou Produto");
            console.log(listaDesejosAtualizada);
        }else{
            // A lista ja esta preenchida
            const listaDesejos = JSON.parse(listaDesejosSalva);

            //Insere mais um produto na lista
            listaDesejos.push({id: id, nome: nome, imagem: imagem});

            //Converte  array para string
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);

            //Insere no asyncstorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Incluido com Sucesso na Lista de Desejos!");
            console.log("Mais um produto na lista");
            console.log(listaDesejosAtualizada);
        // await AsyncStorage.clear();
        }
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Card>
                    <Card.Cover style={styles.imgProd} source={imagem} />
                    <Card.Content style={styles.container}>

                        <Text variant="titleLarge" style={styles.tituloCard}>{nome}</Text>

                        <View style={styles.row}>
                        <Text variant="bodyMedium" style={styles.descricao}>{valor}</Text>
                         <TouchableOpacity onPress={() => addListaDesejos(id, nome, imagem)}>
                            <Ionicons name="heart" size={27} color={"#286D50"} />
                        </TouchableOpacity>
                        </View>

                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.tituloCard, { marginTop: 20 }]}>{nome}</Text>
                        <Image style={styles.imgModal} source={imagem} />
                        <Text style={styles.descricao}>{valor}</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonComprar]}
                                onPress={() => Alert.alert(
                                    "Em breve",
                                    "Esta funcionalidade estará disponível em futuras atualizações.",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => console.log("OK Pressed"),
                                        },
                                    ],
                                    { cancelable: false }
                                )
                                }
                            >
                                <Text style={styles.textStyle}>Comprar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
