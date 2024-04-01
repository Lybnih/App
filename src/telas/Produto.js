import { StyleSheet, StatusBar, Text, Image, Dimensions, View} from 'react-native';

import Topo from "../../assets/produtos/divina_comedia.webp";
import Logo from "../../assets/favicon.png";
import Texto from "../componentes/Texto";

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;


export default function Produto(){
    return <>
        <StatusBar/>
        <Image source={Topo} style={styles.topo}></Image>
        <Texto style={styles.titulo}>Detalhes do produto</Texto>
       
        <View style={styles.produto}> 
         <View style={styles.logotipo}>
            <Image source={Logo} style={styles.logo} resizeMode='contain'/>
            <Texto style={styles.nome}>A Divina Comédia - Trilogia Completa 3 Volumes</Texto>
         </View>
            <Texto style={styles.descricao}> "A Divina Comédia" é uma trilogia escrita por Dante Alighieri no século XIV, composta por Inferno, Purgatório e Paraíso. Dante, guiado por Virgílio e mais tarde por Beatriz, explora os reinos além-túmulo. Cada parte possui 33 cantos, totalizando 100 ao longo da jornada espiritual de Dante.</Texto>
            <Texto style={styles.preco}>R$ 78,90</Texto>
        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1000 / 1000 * width,
        marginTop: 70,

    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 16,
        marginTop: 10,

    },
    produto:{
        paddingVertical: 8,
        paddingHorizontal: 16,
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
    descricao:{
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