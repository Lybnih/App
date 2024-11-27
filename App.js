import React, {useState, useEffect} from 'react';
import { useFonts, Karla_300Light, Karla_700Bold } from '@expo-google-fonts/karla';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Texto from './src/componentes/Texto'

import SobreNos from './src/telas/sobre-nos';
import MenuBox from './src/telas/Produtos';
import Catalogo from './src/telas/Produtos_card';
import Perfil from './src/telas/Perfil';
import Formulario from './src/telas/Formulario';
import ListaDesejos from './src/telas/ListaDesejos';
import Leia from './src/telas/Recomendacao';

//Áudio
import {Audio} from 'expo-av';

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Produtos") {
            iconName = focused ? 'list-outline' : 'list';
          } else if (route.name === "Box") {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === "Leia") {
            iconName = focused ? 'star' : 'star-outline';
          }else if (route.name === "Sobre nós") {
            iconName = focused ? 'heart-circle' : 'heart-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
          } else if (route.name === "Perfil") {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#286D50',
        tabBarInactiveTintColor: '#5F9EA0',
        tabBarStyle: Styles.tabBar, // Aplica o estilo à barra
        tabBarItemStyle: Styles.tabBarItem, // Aplica o estilo aos itens
        tabBarLabelStyle: Styles.tabBarLabel,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Produtos" component={Catalogo} />
      <Tab.Screen name="Box" component={MenuBox} />
      <Tab.Screen name="Leia" component={Leia} />
      <Tab.Screen name="Sobre nós" component={SobreNos} />
      <Tab.Screen name="Lista de Desejos" component={ListaDesejos} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Formulario" component={Formulario} options={{
      tabBarButton: () => null, 
    }} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Carrega a fonte para o projeto
  const [fonteCarregada] = useFonts({
    "KarlaRegular": Karla_300Light,
    "KarlaBold": Karla_700Bold,
  });

  // Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
      <MenuAudio/>
    </NavigationContainer>
  );
}

function MenuAudio(){

  //Áudio para o APP
  const [audioStatus, setAudioStatus] = useState(false)//on,off, false iniciar desligado
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);
  
  //variavel de efeito
  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/song/lofi.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();//paro musica
            await sound.unloadAsync();//descarrego ela
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if(!loading) {setAudioStatus(!audioStatus);}}}>
            <Texto style={Styles.botaoAudio}>🎧 On/Off</Texto>
          </TouchableOpacity>
}

const Styles = StyleSheet.create({
  botaoAudio:{
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 15,
  },

  tabBar: {
    backgroundColor: '#ffffff',
    height: 40,
    width:"100%",
    borderTopWidth: 1,
    borderTopColor: '#ddd', 
    paddingLeft:0,
    marginLeft:0,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:55,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
})

