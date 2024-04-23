import React from 'react';
import {useFonts, Karla_300Light, Karla_700Bold} from '@expo-google-fonts/karla';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';

function menuBox(){
  return <View>
          <Produto {...mock}/>
         </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  
  return <Tab.Navigator 
             screenOptions={ ({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if(route.name == "Produtos"){
                  iconName = focused
                  ? 'list-outline'
                  : 'list';
                } else if (route.name == "Box"){
                  iconName = focused
                  ? 'book'
                  : 'book-outline';
                }else if(route.name == "Sobre nós"){
                  iconName = focused
                  ? 'heart-circle'
                  : 'heart-outline';
                }  else if(route.name == "Lista de Desejos"){
                  iconName = focused
                  ? 'bag-handle'
                  : 'bag-handle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>
              },
              tabBarActiveTintColor: '#286D50',
              tabBarInactiveTintColor: '#5F9EA0',
              tabBarHideOnKeyboard: true,
             })}>
              <Tab.Screen name="Produtos" component={menuBox} />
              <Tab.Screen name="Box" component={menuBox} />
              <Tab.Screen name="Sobre nós" component={menuBox} />
              <Tab.Screen name="Lista de Desejos" component={menuBox} />
             </Tab.Navigator>
}

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

   return <NavigationContainer>
            <TabsMenu />
        </NavigationContainer>
}

