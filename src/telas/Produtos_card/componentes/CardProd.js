import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, Pressable, View, Image, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../styles/style.js";    

export default function CardProd({ item: { id, nome, imagem, valor } }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Card>
                    <Card.Cover style={styles.imgProd} source={imagem} />
                    <Card.Content style={styles.container}>
                        <Text variant="titleLarge" style={styles.tituloCard}>{nome}</Text>
                        <Text variant="bodyMedium" style={styles.descricao}>{valor}</Text>
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
                                onPress={() =>Alert.alert(
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
