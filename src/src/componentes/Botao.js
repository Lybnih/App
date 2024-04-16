import React from "react";
import { TouchableOpacity, Alert, StyleSheet } from "react-native";

import Texto from "./Texto";

export default function Botao({textoBotao, clickBotao}) {
    return <TouchableOpacity style={styles.botao} onPress={clickBotao}>
        <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        width: "80%",
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6,
        backgroundColor: "#286D50",
    },

    botaoTexto: {
        textAlign: "center",
        color: "#FFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
});