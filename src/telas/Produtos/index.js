import React from "react";
import { StatusBar, Image, Dimensions, View, FlatList } from 'react-native';
import Topo from "../../../assets/produtos/divina_comedia.png";
import Logo from "../../../assets/favicon.png";
import Texto from "../../componentes/Texto";
import Item from "./componentes/Item"; // Importar Item
import Mock from '../../mocks/produto';
import styles from './estilo'; // Importar o arquivo de estilos


const width = Dimensions.get('screen').width;

export default function Produto() {
    
    return (
        <View style={styles.container}>
            
            
            
            <FlatList
                data={Mock.itens.lista}
                renderItem={Item} // Renderizar itens da lista
                keyExtractor={(item) => item.nome}
                ListHeaderComponent={() => (
                    <View style={styles.produto}>
                        <StatusBar/>
                       
                        <Image source={Topo} style={styles.topo} resizeMode='contain'></Image>
                        <Texto style={styles.titulo}>{Mock.titulo}</Texto>
                        <View style={styles.logotipo}>  
                        <Texto style={styles.nome}>A Divina Comédia - Trilogia Completa 3 Volumes</Texto>
                        </View>
                        <Texto style={styles.descricao}>
                            "A Divina Comédia" é uma trilogia escrita por Dante Alighieri no século XIV, composta por Inferno, Purgatório e Paraíso.
                            Dante, guiado por Virgílio e mais tarde por Beatriz, explora os reinos além-túmulo. Cada parte possui 33 cantos, totalizando
                            100 ao longo da jornada espiritual de Dante.
                        </Texto>
                        <Texto style={styles.preco}>R$ 78,90</Texto>
                    </View>
                )}
            />
        </View>
    );
};

