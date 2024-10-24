import React, { useState, useEffect } from 'react';
import { Text, Image, ScrollView } from 'react-native';
import styles from './estilo';
import axios from 'axios';

const API_KEY = 'AIzaSyDiUcEqE_f_x4aqzjH3RSEVnF_djUXiBt4';

export default function Recomendacao() {
  const [livro, setLivro] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarLivroAleatorio = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:programming&maxResults=1&key=${API_KEY}`
      );
      
      console.log(response.data); // Verificar a estrutura da resposta

      if (response.data.items && response.data.items.length > 0) {
        const livroData = response.data.items[0];
        const imagem = livroData.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150';
        const titulo = livroData.volumeInfo.title;
        const autor = livroData.volumeInfo.authors?.[0] || 'Autor Desconhecido';
        const sinopse = livroData.volumeInfo.description || 'Sinopse não disponível';

        setLivro({ imagem, titulo, autor, sinopse });
      } else {
        setErro('Nenhum livro encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar livro:', error);
      setErro('Erro ao buscar livro. Por favor, tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    buscarLivroAleatorio();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {erro ? (
        <Text>{erro}</Text>
      ) : livro ? (
        <>
          <Image source={{ uri: livro.imagem }} style={styles.imagem} />
          <Text style={styles.titulo}>{livro.titulo}</Text>
          <Text style={styles.autor}>Por: {livro.autor}</Text>
          <Text style={styles.sinopse}>{livro.sinopse}</Text>
        </>
      ) : (
        <Text>Carregando livro...</Text>
      )}
    </ScrollView>
  );
}
