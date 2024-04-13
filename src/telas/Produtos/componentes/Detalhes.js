import { StyleSheet, StatusBar, Text, Image, Dimensions, View, TouchableOpacity, Alert } from 'react-native';

import Logo from "../../../../assets/favicon.png";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;

export default function Detalhes({ nome, Logo, detalhes, preco, botao}) {
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}> {detalhes}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao textoBotao={botao} clickBotao={()=>{Alert.alert("Em breve!")}}/>
    </View>
}

const styles = StyleSheet.create({
    produto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
    },
    nome: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "#BB2233",
        marginTop: 12,
        marginBottom: 10,
        marginRight: 20,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        color: "#A3A3A3",
        marginBottom: 10,
    },
    preco: {
        textAlign: "right",
        fontSize: 17,
        color: "black",
        marginTop: 40,
    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 15,
    },

    logotipo: {
        flexDirection: "row",
    }
});