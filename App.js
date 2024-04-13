import React from 'react';
import {useFonts, Karla_300Light, Karla_700Bold} from '@expo-google-fonts/karla';
import { View } from 'react-native';

import mock from './src/mocks/produto';

import Produto from './src/telas/Produtos/';

export default function App() {
  
// Carrega a fonte para ao projeto 
const [ fonteCarregada ] = useFonts({
  "KarlaRegular" : Karla_300Light,
  "KarlaBold" : Karla_700Bold,
});

  // Checa se as fontes ja foram carregadas
  if(!fonteCarregada){
    return <View />
  }

   return <Produto {...mock}/>
}

