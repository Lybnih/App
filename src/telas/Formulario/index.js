import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './estilo.js'; 


export default function Formulario() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [receberEmails, setReceberEmails] = useState(false);

  const handleSubmit = () => {
    console.log('Nome:', nome);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Email:', email);
    console.log('Número:', numero);

    setNome('');
    setDataNascimento('');
    setEmail('');
    setNumero('');
    setReceberEmails(false);

    alert('Formulário enviado com sucesso!');
  };


  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Formulário de Contato</Text>
      <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.contentContainer}>
            
            
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="XX/XX/XX"
              value={dataNascimento}
              onChangeText={setDataNascimento}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Número"
              value={numero}
              onChangeText={setNumero}
              keyboardType="phone-pad"
            />
            
            <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
              <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.voltarBotao} onPress={() => navigation.goBack()}>
              <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
