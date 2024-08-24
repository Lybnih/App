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
          } else if (route.name === "Sobre nós") {
            iconName = focused ? 'heart-circle' : 'heart-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
          } else if (route.name === "Perfil") {
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
          }


          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#286D50',
        tabBarInactiveTintColor: '#5F9EA0',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Produtos" component={Catalogo} />
      <Tab.Screen name="Box" component={MenuBox} />
      <Tab.Screen name="Sobre nós" component={SobreNos} />
      <Tab.Screen name="Lista de Desejos" component={MenuBox} />
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
    backgroundColor: 'white'
  }
})