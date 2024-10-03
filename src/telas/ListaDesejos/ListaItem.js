import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons-Ionicons";
import styles from './estilo.js'; 

import Texto from "../../componentes/Texto";
import { StatusBar } from "expo-status-bar";

export default function ListaItem({ id, nome, imagem }) {
    return (
        <View style={styles.cardContainer}>
            <Card mode="contained" style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem} />
                    <Texto style={styles.tituloCard}>{nome}</Texto>
                </Card.Content>
            </Card>
        </View>
    );
}
