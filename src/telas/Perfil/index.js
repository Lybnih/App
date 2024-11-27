import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Texto from '../../componentes/Texto.js';
import styles from './estilo.js';
import { Camera } from 'expo-camera';

export default function Perfil() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageUri, setImageUri] = useState(require('../../../assets/perfil/perfil-padrão.png')); 
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  //permissão camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  //capturar a imagem
  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setImageUri({ uri: photo.uri });
      setIsCameraVisible(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão da camera</Text>;
  }

  if (hasPermission === false) {
    return <Text>Sem acesso a camera</Text>;
  }

  return (
    <View style={styles.tela}>
      <Texto style={styles.titulo}>Perfil</Texto>
      <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
        {isCameraVisible ? (
          <Camera style={{ flex: 1, width: '100%' }} ref={ref => setCameraRef(ref)}>
            <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
              <Text style={styles.cameraButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
          </Camera>
        ) : (
          <>
            <TouchableOpacity onPress={() => setIsCameraVisible(true)}>
              <Image
                source={imageUri}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <Text style={styles.name}>Vitória Lybnih</Text>
            <Text style={styles.email}>lybnihvitoria@gmail.com</Text>
          </>
        )}
      </ImageBackground>
    </View>
  );
}
