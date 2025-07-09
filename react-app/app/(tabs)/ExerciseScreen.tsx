import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

const exercises: Exercise[] = [
  {
    id: '2355',
    name: 'arm slingers hanging bent knee legs',
    gifUrl: 'https://gymvisual.com/10219-large_default/arm-slingers-hanging-bent-knee-legs.jpg',
    bodyPart: 'waist',
    equipment: 'body weight',
    target: 'abs',
  },
  {
    id: '1525',
    name: 'bench press (barbell)',
    gifUrl: 'https://s3assets.skimble.com/assets/2289478/image_iphone.jpg',
    bodyPart: 'chest',
    equipment: 'barbell',
    target: 'pectorals',
  },
  // Adicione mais exercícios...
];

const ExerciseScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Exercise }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.gifUrl }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Icon name="star" size={20} color="#ccc" style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1e" />

      {/* Cabeçalho com filtros */}
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, styles.activeFilter]}>
            <Text style={styles.activeFilterText}>Muscle Groups 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Equipment</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de exercícios */}
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Botão flutuante */}
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createBtnText}>+ Create Exercise</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1e' },
  header: { padding: 16 },
  title: { color: '#fff', fontSize: 18, marginBottom: 10 },
  filters: { flexDirection: 'row', gap: 8 },
  filterBtn: {
    backgroundColor: '#2c2c2e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  filterText: { color: '#ccc' },
  activeFilter: { backgroundColor: '#ff9f0a' },
  activeFilterText: { color: '#000', fontWeight: 'bold' },
  list: { padding: 8 },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    maxWidth: '48%',
    position: 'relative',
  },
  image: { width: 80, height: 80, resizeMode: 'contain' },
  name: { color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 6 },
  icon: { position: 'absolute', top: 10, right: 10 },
  createBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#ff9f0a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  createBtnText: { color: '#000', fontWeight: 'bold' },
});

export default ExerciseScreen;
