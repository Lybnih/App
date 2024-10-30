import React, { useState, useCallback } from 'react';
import { View, Text, Image, ActivityIndicator, ImageBackground, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Texto } from '../../componentes/Texto'
import styles from './estilo';

export default function BookRecommendation() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = 'AIzaSyDiUcEqE_f_x4aqzjH3RSEVnF_djUXiBt4';

  const fetchRandomBook = () => {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=livros&key=${apiKey}&maxResults=40`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.items.length);
          const randomBook = data.items[randomIndex];
          setBook({
            title: randomBook.volumeInfo.title,
            authors: randomBook.volumeInfo.authors || ['Autor desconhecido'],
            description: randomBook.volumeInfo.description || 'Descrição não disponível.',
            publishedDate: randomBook.volumeInfo.publishedDate || 'Data de publicação desconhecida',
            thumbnail: randomBook.volumeInfo.imageLinks?.thumbnail || null,
          });
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error))
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      fetchRandomBook();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#286D50" />
      </View>
    );
  }

  return (
    <View style={styles.tela}>
       <Text style={styles.titulo}>Recomendação</Text>
      <ImageBackground source={require('../../../assets/fundo/background.png')} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {book ? (
        <>
        <Text style={styles.title}>{book.title}</Text>
          <Image
            source={book.thumbnail ? { uri: book.thumbnail } : require('../../../assets/Livros/img_padrao.png')}
            style={styles.bookImage}
          />
          
          <Text style={styles.author}>Autor(es): {book.authors.join(', ')}</Text>
          <Text style={styles.description}>{book.description}</Text>
          <Text style={styles.publishedDate}>Data de Publicação: {book.publishedDate}</Text>
        </>
      ) : (
        <Text style={styles.errorText}>Nenhum livro encontrado.</Text>
      )}
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

