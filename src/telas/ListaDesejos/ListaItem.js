import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons-Ionicons";
import styles from './estilo.js';

import Texto from "../../componentes/Texto";
import { StatusBar } from "expo-status-bar";

export default function ListaItem({ id, nome }) {
    return (
        <View style={styles.cardContainer}>
            <Card mode="contained" style={styles.card}>
                <Texto style={styles.tituloCard}>{nome}</Texto> 
                <View style={styles.cardContent}>
                    <View style={styles.bookIconContainer}>
                        <Ionicons name="book-outline" size={40} color="black" />
                    </View>
                    <View style={styles.trashIconContainer}>
                        <Ionicons name="trash" size={24} color="red" />
                    </View>
                </View>
            </Card>
        </View>
    );
}
