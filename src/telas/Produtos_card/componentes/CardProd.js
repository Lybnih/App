import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, Pressable, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../styles/style.js";	

export default function CardProd({ item: { nome, imagem, valor } }) {
    //const [modalVisible, setModalVisible] = useState(false);
    return <View style={styles.card}>
        {/* <TouchableOpacity onPress={() => setModalVisible(true)}> */}
    <TouchableOpacity>
        <Card>
            <Card.Cover style={styles.imgProd} source={imagem} />
                <Card.Content style={styles.container}>
                    <Text variant="titleLarge" style={styles.tituloCard}>{nome}</Text>
                    <Text variant="bodyMedium" style={styles.descricao}>{valor}</Text>
                </Card.Content>
                
            </Card>
        </TouchableOpacity>

        {/* <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.tituloCard}>{titulo}</Text>
                <Image style={styles.imgModal} source={imagem}></Image>
                <Text style={styles.descricao}>{descricao}</Text>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text>Fechar</Text>
                </Pressable>
            </View>
        </Modal> */}
    </View>
}