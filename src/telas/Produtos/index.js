import React from "react";
import { FlatList, View, Image, Text } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";


export default function Produto({topo, detalhes, itens}){
   
   const renderItem = ({item:{nome, imagem}}) => <View>
        <Image source={imagem}/>
        <Text>{nome}</Text>
    </View>

   return <>
        <FlatList 
           data={itens.lista}
           renderItem={renderItem}
           keyExtractor={({nome})=>(nome)}
        />
        <Topo {...topo}/>
        <Detalhes {...detalhes}/>
    </>
}
