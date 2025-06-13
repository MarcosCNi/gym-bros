// Se o arquivo agora se chama: app/index.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Exercise = {
  id: string;
  title: string;
};

const exercises: Exercise[] = [
  { id: '1', title: 'Bench Press (barbell)' },
  { id: '2', title: 'Incline Bench Press (dumbbell)' },
  { id: '3', title: 'Seated Fly (machine)' },
  { id: '4', title: 'Bench Press (dumbbell)' },
  { id: '5', title: 'Chest Press (machine)' },
  { id: '6', title: 'Push up' },
];

const Index: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }: { item: Exercise }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.starIcon}>
        <Ionicons
          name={favorites.includes(item.id) ? 'star' : 'star-outline'}
          size={20}
          color="#facc15"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+ Create Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;


// 💄 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E0F13', // fundo vinho escuro
    paddingHorizontal: 10,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#43131C', // fundo dos cards
    margin: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '45%',
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  starIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  title: {
    color: '#FED7AA', // texto bege claro
    fontSize: 14,
    textAlign: 'center',
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FED7AA', // botão bege claro
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#2E0F13', // texto escuro
    fontWeight: 'bold',
    fontSize: 16,
  },
});